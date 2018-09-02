import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MapModule } from '../../shared/map/map.module';
import { LightboxModule } from '../lightbox/lightbox.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    MapModule,
    LightboxModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, MapModule, LightboxModule]
})
export class HomeModule {
}
