import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() menus: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.menus);
  }

}