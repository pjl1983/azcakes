import { Component, OnInit } from '@angular/core';
// import { WOW } from 'wowjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    // new WOW().init();
  }
}
