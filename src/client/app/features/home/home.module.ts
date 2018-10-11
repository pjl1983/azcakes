import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { FlavorsModule } from '../flavors/flavors.module';
import { PaymentModule } from '../payment/payment.module';
import { MapModule } from '../../shared/map/map.module';


@NgModule({
  imports: [
    FlavorsModule,
    PaymentModule,
    MapModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent,
    FlavorsModule,
    PaymentModule,
    MapModule
  ]
})
export class HomeModule {
}
