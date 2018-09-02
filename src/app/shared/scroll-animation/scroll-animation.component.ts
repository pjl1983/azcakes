import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.css']
})

export class ScrollAnimationComponent implements OnInit {
  array: any = document.getElementsByClassName('animated');


  constructor() {
    window.onscroll = () => {
      this.checkView();
    };
  }

  ngOnInit() {
    this.checkView();
  }

  isInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  checkView() {
    for (let i = 0; i < this.array.length; i++) {
      const element = this.array[i];
      const booleanVal = this.isInViewport(element);
      let classAdded = false;
      element.classList.forEach(value => {
        if (value === element.attributes['data'].value) {
          classAdded = true;
        }
      });
      if (booleanVal && !classAdded) {
        element.className += ' ' + element.attributes['data'].value;
      } else if (!booleanVal) {
        this.array[i].classList.remove(element.attributes['data'].value);
      }
    }
  }
}
