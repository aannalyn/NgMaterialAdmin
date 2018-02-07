import { Component, ChangeDetectorRef } from '@angular/core';
import { MENUS } from '../shared/nav/mock-menus';

import { OverlayContainer } from '@angular/cdk/overlay';
import { LayoutModule, MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  providers: [MediaMatcher]
})
export class LayoutComponent {
  mobileQuery:MediaQueryList;
  menus = MENUS;
  theme = 'indigo-theme';
  availableLangs = [
    { name: 'English', code: 'en' }, 
    { name: 'Spanish', code: 'es' },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    overlayContainer: OverlayContainer,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    overlayContainer.getContainerElement().classList.add(this.theme);

    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  changeTheme(value) {
    this.theme = value;
  }
}
