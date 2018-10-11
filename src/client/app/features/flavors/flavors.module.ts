import { NgModule } from '@angular/core';
import { FlavorsComponent } from './flavors.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [FlavorsComponent],
  exports: [FlavorsComponent]
})
export class FlavorsModule {
}
