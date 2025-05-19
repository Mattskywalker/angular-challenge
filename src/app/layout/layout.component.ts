import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  iconList = ['search', 'home', 'star_outline', 'textsms', 'tune', 'account_balance'];
  constructor() {}

  ngOnInit() {}
}
