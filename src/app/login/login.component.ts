import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  onSubmit(loginForm) {
    this.userService.checkUser(loginForm.value);
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
