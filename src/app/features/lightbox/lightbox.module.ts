import { NgModule } from '@angular/core';
import { LightboxComponent } from './lightbox.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [LightboxComponent],
  exports: [LightboxComponent]
})
export class LightboxModule {
}
