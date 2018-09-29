import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  date: Date = new Date();
  contact: FormGroup;

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
      'message': new FormControl('')
    });
  }

  submit(contact: ContactModel) {
    this.contactService.submitContactInfo(contact).subscribe(res => {
      console.log(res);
    });
  }
}
