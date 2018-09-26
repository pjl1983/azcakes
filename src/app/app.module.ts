import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { FooterModule } from './features/footer/footer.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ScrollAnimationModule } from './shared/scroll-animation/scroll-animation.module';
import { OrderingInformationModule } from './features/ordering-information/ordering-information.module';
import { AppRoutingModule } from './app.routes';
import { ContactModule } from './features/contact/contact.module';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    OrderingInformationModule,
    ContactModule,
    SharedModule,
    ScrollAnimationModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
