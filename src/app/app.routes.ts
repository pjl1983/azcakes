import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { OrderingInformationComponent } from './features/ordering-information/ordering-information.component';
import { ContactComponent } from './features/contact/contact.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'order', component: OrderingInformationComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
