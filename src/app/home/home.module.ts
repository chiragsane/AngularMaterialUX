import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { ToastComponent } from '../toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    ToastComponent
    ]
})
export class HomeModule { }
