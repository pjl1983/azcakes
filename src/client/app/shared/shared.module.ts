import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../core/services/contact.service';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule,
    NgxCaptchaModule
  ],
  exports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule,
    NgxCaptchaModule
  ],
  providers: [ContactService],
  bootstrap: []
})

export class SharedModule {
}


