import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'app/shared/material.module';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    UsersComponent
  ]
})
export class HomeModule { }
