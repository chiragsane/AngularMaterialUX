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
  signinForm: FormGroup;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  onSignin(signinForm) {
    this.userService.checkUser(signinForm.value)
      .subscribe(
      res => {
        this.router.navigate(['home']);
      },
      err => {
        console.log(err);
      })
  }
  onSignup(signupForm) {
    this.userService.addUser(signupForm.value)
      .subscribe(
      res => {
        this.router.navigate(['home']);
      },
      err => {
        console.log(err);
      })
  }
  newUser() {
    alert('new user');
  }
  existingUser() {
    alert('existing user');
  }
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirm_password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
}
