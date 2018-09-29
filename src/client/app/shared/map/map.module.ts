import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule {
}
