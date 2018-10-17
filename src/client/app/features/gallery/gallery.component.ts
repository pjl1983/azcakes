import { Component, OnInit } from '@angular/core';
import { GalleryImageList } from './gallery-image-list';

declare var $: any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  GalleryImageList = GalleryImageList;
  selection: string;

  constructor() {
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
  }
}
