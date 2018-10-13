import { Component, OnInit } from '@angular/core';
import { GalleryImageList } from './gallery-image-list';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  selection: string;
  GalleryImageList = GalleryImageList;

  constructor() {
  }

  ngOnInit() {

  }
}
