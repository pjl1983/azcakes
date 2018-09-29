import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) {
  }

  submitContactInfo(contact: ContactModel): Observable<any> {
    return this.http.post('/api/contact', {contact: contact});
  }
}
