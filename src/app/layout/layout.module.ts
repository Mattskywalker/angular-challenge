import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, MatIconModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
