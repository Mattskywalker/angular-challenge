import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { MatIconModule } from '@angular/material';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [InputComponent, SimpleCardComponent, InfoItemComponent, ComponentsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SimpleCardComponent, InfoItemComponent],
})
export class SharedModule {}
