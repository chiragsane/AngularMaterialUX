import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    User = {
        exists: false
    }
    constructor() { }

    checkUser(username, password) {
        if (username === password) {
            this.User.exists = true;
            return true;
        }
    }
}
