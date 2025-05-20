import { Component, Input, OnInit } from '@angular/core';

export interface StepProps {
  label: string;
}

@Component({
  selector: 'ailos-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input()
  stepList: StepProps[];
  @Input()
  currentStep: number;

  constructor() {}

  ngOnInit() {}
}
