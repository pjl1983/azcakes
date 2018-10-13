import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { KeysPipe } from '../../core/pipes/keys.pipe';


@NgModule({
  imports: [SharedModule],
  declarations: [GalleryComponent, KeysPipe],
  exports: [GalleryComponent]
})
export class GalleryModule {
}
