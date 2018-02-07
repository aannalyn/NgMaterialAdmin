import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() toggleMenuVal:boolean;
  @Output() toggleMenu = new EventEmitter();

  onToggleMenu() {
    this.toggleMenuVal = !this.toggleMenuVal;
    this.toggleMenu.emit(this.toggleMenuVal);
  }
}
