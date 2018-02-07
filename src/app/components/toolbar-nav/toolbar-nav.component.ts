import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss']
})
export class ToolbarNavComponent {
  @Input() defaultTheme:string;
  @Output() changeTheme = new EventEmitter();
  
  themes = [
    {
      name: 'blue-theme',
      color: '#2196F3',
    },
    {
      name: 'indigo-theme',
      color: '#3F51B5'
    },
  ];

  onChangeTheme(selected) {
    this.defaultTheme = selected;
    this.changeTheme.emit(selected);
  }

}
