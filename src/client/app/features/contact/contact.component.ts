import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactModel} from '../../core/models/contact.model';
import {ContactService} from '../../core/services/contact.service';
import {environment} from '../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  captchaSiteKey = environment.captchaSiteKey;
  captchaIsLoaded: boolean;
  captchaSuccess: boolean;
  captchaResponse: string;
  captchaIsExpired: boolean;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contact = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'telephone': new FormControl('', Validators.required),
      'theme': new FormControl(''),
      'date': new FormControl(new Date()),
      'message': new FormControl(''),
      'recaptcha': new FormControl('', Validators.required)
    });
  }

  submit(contact: ContactModel) {
    this.contactService.submitContactInfo(contact).subscribe(() => {
        $('#successModal').modal();
        this.contact.reset();
      },
      error => {
        $('#errorModal').modal();
      }
    );
  }

  handleExpire() {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
  }

  handleLoad() {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
  }

  handleSuccess(captchaResponse: string) {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
  }
}
