import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,) {
  }

  ngOnInit() {
  }
}
