import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ScrollAnimationComponent } from './scroll-animation.component';


@NgModule({
  imports: [SharedModule],
  declarations: [ScrollAnimationComponent],
  exports: [ScrollAnimationComponent]
})
export class ScrollAnimationModule {
}
