import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Users = [];

  constructor(private userService: UserService) { }

  deleteUser(user_id) {
    this.userService.deleteUser(user_id).subscribe(res => {
      this.Users = [];
      this.getUsers();
    })
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(
      res => {
        this.Users = res;
        console.log(this.Users)
      })
  }
  ngOnInit() {
    this.getUsers();
  }
}
