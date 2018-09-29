import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule {
}
