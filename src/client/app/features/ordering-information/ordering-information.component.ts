import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-ordering-information',
  templateUrl: './ordering-information.component.html',
  styleUrls: ['./ordering-information.component.css']
})
export class OrderingInformationComponent {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
