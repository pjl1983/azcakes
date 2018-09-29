import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GalleryModule } from '../gallery/gallery.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { MapModule } from '../../shared/map/map.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    GalleryModule,
    FeedbackModule,
    MapModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent,
    GalleryModule,
    FeedbackModule,
    MapModule
  ]
})
export class HomeModule {
}
