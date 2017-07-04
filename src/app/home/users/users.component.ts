import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users = [];

  constructor(private userService: UserService) { }
deleteUser(user_id) {
    this.userService.deleteUser(user_id).subscribe(res => {
      this.getUsers();
    })
  }
  editUser(user_id) {
    console.log(user_id);
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
        this.Users = res;
        console.log(this.Users)
      })
  }
  ngOnInit() {
    this.getUsers();
  }

}
