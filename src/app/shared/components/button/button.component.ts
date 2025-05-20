import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ailos-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @HostBinding('style')
  @Input()
  style: { [key: string]: string };

  @Input() disabled: boolean = false;
  @Input() loading = false;
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'p' | 'm' = 'm';

  className: string;

  constructor() {}

  ngOnInit() {
    this.className = `${this.variant} ${this.size}`;
  }
}
