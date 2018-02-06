import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss']
})
export class ToolbarNavComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  onChangeTheme(selected) {
    this.changeTheme.emit(selected);
  }

}
