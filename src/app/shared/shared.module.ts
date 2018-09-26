import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    FlatpickrModule
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    FlatpickrModule
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule {
}


