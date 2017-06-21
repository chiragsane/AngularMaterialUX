import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate() {
        if (this.userService.User.exists) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}