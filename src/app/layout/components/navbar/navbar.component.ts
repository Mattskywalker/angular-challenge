import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  iconList = ['search', 'home', 'star_outline', 'textsms', 'tune', 'account_balance'];
  constructor() {}

  ngOnInit() {}
}
