import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './shared/auth.guard';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    NotificationsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
