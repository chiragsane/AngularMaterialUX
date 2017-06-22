import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  onSubmit(loginForm) {
    if (this.userService.checkUser(loginForm.value.username, loginForm.value.password)) {
      this.router.navigate(['home']);
    }
  }
  newUser() {
    this.loginForm = this.formBuilder.group({
      username: ['admin', [Validators.required, Validators.minLength(2)]],
      password: ['admin', [Validators.required, Validators.minLength(2)]]
    })
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

}
