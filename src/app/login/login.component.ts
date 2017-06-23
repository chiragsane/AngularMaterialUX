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
    this.userService.checkUser(loginForm.value)
      .subscribe(
      res => {
        this.router.navigate(['home']);
      },
      err => {
        console.log(err);
      })
  }
  newUser() {
    this.loginForm = this.formBuilder.group({
      username: ['moduser', [Validators.required, Validators.minLength(2)]],
      password: ['moduser', [Validators.required, Validators.minLength(2)]]
    })
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

}
