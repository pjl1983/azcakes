import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryImageList } from './gallery-image-list';
import { NavigationStart } from '@angular/router';
import 'rxjs/operators';


declare var $: any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  GalleryImageList = GalleryImageList;

  constructor(private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#carouselIndicators').swipe({
        swipe: (event, direction) => {
          if (direction === 'right') {
            $('.carousel').carousel('prev');
          } else if (direction === 'left') {
            $('.carousel').carousel('next');
          }
        }
      });
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        $('#imageModal').modal('hide');
      }
    });
  }
}
