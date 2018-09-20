import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app.routes';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule {
}


