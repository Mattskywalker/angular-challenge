import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
})
export class InfoItemComponent implements OnInit {
  @Input() icon: string;
  @Input() iconColor: string;
  @Input() label: string;
  @Input() info: string;

  constructor() {}

  ngOnInit() {}
}
