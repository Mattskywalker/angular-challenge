import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
