import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapModule } from '../../shared/map/map.module';
import { LightboxModule } from '../lightbox/lightbox.module';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    LightboxModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, MapModule, LightboxModule]
})
export class HomeModule {
}
