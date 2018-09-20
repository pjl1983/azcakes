import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingInformationComponent } from './ordering-information.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderingInformationComponent],
  exports: [OrderingInformationComponent]
})
export class OrderingInformationModule { }
