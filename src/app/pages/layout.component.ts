import { Component, OnInit } from '@angular/core';
import { MENUS } from '../shared/nav/mock-menus';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  menus = MENUS;
  theme = 'indigo-theme';

  availableLangs = [
    { name: 'English', code: 'en' }, 
    { name: 'Spanish', code: 'es' },
  ];

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add(this.theme);
  }

  ngOnInit() {
  }

  changeTheme(value) {
    this.theme = value;
  }
}
