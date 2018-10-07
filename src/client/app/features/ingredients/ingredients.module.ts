import { NgModule } from '@angular/core';
import { IngredientsComponent } from './ingredients.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [IngredientsComponent],
  exports: [IngredientsComponent]
})
export class IngredientsModule {
}
