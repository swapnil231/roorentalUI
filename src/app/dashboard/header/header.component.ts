import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sideNavClicked = new EventEmitter();
  sideNavToggle = false;

  clicedOnBurgerMenu(newstatus?: any) {
    this.sideNavToggle = !this.sideNavToggle;
    this.sideNavClicked.emit(this.sideNavToggle);
  }
}
