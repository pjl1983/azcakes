import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GalleryModule } from '../gallery/gallery.module';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { MapModule } from '../../shared/map/map.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    GalleryModule,
    IngredientsModule,
    MapModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent,
    GalleryModule,
    IngredientsModule,
    MapModule
  ]
})
export class HomeModule {
}
