import { NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [SharedModule],
  declarations: [FeedbackComponent],
  exports: [FeedbackComponent]
})
export class FeedbackModule {
}
