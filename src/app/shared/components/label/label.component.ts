import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() subtitle: string;
  constructor() {}

  ngOnInit() {}
}
