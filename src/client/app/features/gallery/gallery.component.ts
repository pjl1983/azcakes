import { Component } from '@angular/core';
import { GalleryImageList } from './gallery-image-list';

declare var $: any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  GalleryImageList = GalleryImageList;
  selection: string;

  constructor() {
  }
}
