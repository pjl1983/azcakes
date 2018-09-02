import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { FooterModule } from './features/footer/footer.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ScrollAnimationModule } from './shared/scroll-animation/scroll-animation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    SharedModule,
    ScrollAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
