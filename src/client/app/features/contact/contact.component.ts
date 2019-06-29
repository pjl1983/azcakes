import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactModel} from '../../core/models/contact.model';
import {ContactService} from '../../core/services/contact.service';
import {environment} from '../../../../environments/environment';


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
      'lastName': new FormControl(''),
      'email': new FormControl('', Validators.required),
      'subject': new FormControl(''),
      'theme': new FormControl(''),
      'date': new FormControl(new Date()),
      'message': new FormControl(''),
      'recaptcha': new FormControl('', Validators.required)
    });
  }

  submit(contact: ContactModel) {
    this.contactService.submitContactInfo(contact).subscribe((res) => {
        window.alert('Message sent successfully.');
        this.contact.reset();
      },
      error => {
        console.log('An error has been encountered while submitting your contact request. Please try again.');
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
