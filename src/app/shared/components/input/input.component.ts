import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { leave } from '@angular/core/src/profile/wtf_impl';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ailos-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inputRef') inputRef: ElementRef;

  @Input() label: string;
  @Input() placeholder: string;
  @Input() auxiliaryText: string;

  @HostBinding('style') styles: { [key: string]: string };

  @Input() value: string = '';
  @Input() error: boolean = false;
  @Input() maxLength: number;

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit() {}

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    if (this.inputRef) {
      this.inputRef.nativeElement.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
