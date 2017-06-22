import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/toast.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toastMessage: String = '';

  constructor(private toastService: ToastService, private userService: UserService) { }

  ngOnInit() {
    this.toastService.toast();
    this.toastMessage = `Welcome ${this.userService.User.name}`;
  }
}
