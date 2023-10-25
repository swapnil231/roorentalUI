import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  checkviewportsize() {
    const checkClass = document.querySelector('#app-sidebar');
    const sidearea = document.querySelector('#sidearea');
    const x = window.matchMedia('(max-width: 700px)');
    x.addEventListener('change', function () {
      if (x.matches) {
        checkClass?.classList.replace('appside-nav-close', 'appside-nav-open');
        sidearea?.classList.replace('display-area', 'display-area-shrink');
      } else {
        checkClass?.classList.replace('appside-nav-open', 'appside-nav-close');
        sidearea?.classList.replace('display-area-shrink', 'display-area');
      }
    });
  }

  routergo(event: any) {
    console.log('clicked go router', event.routerlink);
    this.router.navigate([`/${event.routerlink}`]);
    const checkClass = document
      .querySelector('#app-sidebar')
      ?.classList.contains('appside-nav-close');

    if (checkClass) {
      const element = document.querySelector('#burgerbtn') as HTMLElement;
      element.click();
    }
  }
  ngOnInit(): void {
    console.log(this.getSideNavStatus, 'jjjjjjjjjjj');
    this.checkviewportsize();
  }
  @Input() getSideNavStatus = false;

  list = [
    {
      number: '1',
      name: 'home',
      icons: 'lni lni-home',
      routerlink: '',
    },

    {
      number: '2',
      name: 'aylitics',
      icons: 'lni lni-stats-up',
      routerlink: 'analytics',
    },

    {
      number: '3',
      name: 'products',
      icons: 'lni lni-package',
      routerlink: 'products',
    },

    // {
    //   number: '4',
    //   name: 'order',
    //   icons: 'lni lni-cart',
    // },

    // {
    //   number: '5',
    //   name: 'settings',
    //   icons: 'lni lni-cog',
    // },

    // {
    //   number: '6',
    //   name: 'about',
    //   icons: 'lni lni-information',
    // },
  ];
}
