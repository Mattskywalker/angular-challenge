import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { LayoutModule } from '../../layout/layout.module';
import { HomeFormService } from './home-form.service';

@NgModule({
  declarations: [HomeComponent],
  providers: [HomeFormService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
