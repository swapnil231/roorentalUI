import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newstatus: any;

  newstatusofSideNav($event: any) {
    this.newstatus = $event;
  }
  sideNavStaus: any;

  getBurgerMenuClick($event: any) {
    this.sideNavStaus = $event;
    console.log($event, 'event');
  }
}
