import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/shared/auth.guard';

import { HomeModule } from './home/home.module'

import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard]
  }, {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
