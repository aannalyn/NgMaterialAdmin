import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() lists:Array<any>;
  @Input() toggleMenuVal:number;

  constructor() { }

  ngOnInit() {
  }

}
