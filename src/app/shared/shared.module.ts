import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule {
}


