import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  url: string;
  toggle: boolean;
  section: string;
  home: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((route: any) => {
      this.url = route.url;
      this.home = this.url === 'home';
    });
  }
}
