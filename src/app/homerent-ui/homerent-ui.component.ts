import { Component } from '@angular/core';
import { HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homerent-ui',
  templateUrl: './homerent-ui.component.html',
  styleUrls: ['./homerent-ui.component.scss'],
})
export class HomerentUIComponent {
  isloading = false;

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 0 /*(ms you want)*/,
    // mouseDrag: true,
    // touchDrag: true,

    // pullDrag: true,

    // dots: true,
    smartSpeed: 1500,
    // navSpeed: 700,

    navText: [
      // '⋙',
      // '⋘',
      '',
      '',
      // '<i class="lni lni-chevron-right"></i>',
      // '<i class="lni lni-chevron-left"></i>',
      // '<i class="fa fa-caret-right" aria-hidden="true"></i>',
      // '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    ],
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   400: {
    //     items: 2,
    //   },
    //   740: {
    //     items: 3,
    //   },
    //   940: {
    //     items: 4,
    //   },
    // },
    nav: true,
  };

  customOptions2: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,

    navText: [
      '<i class="lni lni-chevron-right"></i>',
      '<i class="lni lni-chevron-left"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };

  @HostListener('window:scroll', [])
  onWindowScroll(event: Event) {
    if (
      document.body.scrollTop > 45 ||
      document.documentElement.scrollTop > 45
    ) {
      document.querySelector('.nav-bar')?.classList.add('sticky-top');
    } else {
      document.querySelector('.nav-bar')?.classList.remove('sticky-top');
    }
  }
}
