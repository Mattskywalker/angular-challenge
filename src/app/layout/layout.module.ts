import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, MatIconModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
