import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { MatIconModule } from '@angular/material';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { ButtonComponent } from './components/button/button.component';
import { LabelComponent } from './components/label/label.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    InputComponent,
    SimpleCardComponent,
    InfoItemComponent,
    InputComponent,
    ButtonComponent,
    LabelComponent,
    StepperComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    SimpleCardComponent,
    InfoItemComponent,
    InputComponent,
    ButtonComponent,
    LabelComponent,
    StepperComponent,
  ],
})
export class SharedModule {}
