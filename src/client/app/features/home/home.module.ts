import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { FlavorsModule } from '../flavors/flavors.module';
import { PaymentModule } from '../payment/payment.module';
import {ContactModule} from '../contact/contact.module';
import {GalleryModule} from '../gallery/gallery.module';

@NgModule({
  imports: [
    FlavorsModule,
    PaymentModule,
    GalleryModule,
    ContactModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent,
    FlavorsModule,
    PaymentModule,
    GalleryModule,
    ContactModule
  ]
})

export class HomeModule {
}
