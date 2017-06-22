import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    URL = 'http://10.103.21.186:8080';
    User = {
        exists: false,
        _id: '',
        name: '',
        username: '',
        password: ''
    };
    constructor(private http: Http, private router: Router) { }

    checkUser(user) {
        this.http.post(`${this.URL}/api/authenticate`, user)
            .map(res => res.json())
            .subscribe(
            res => {
                if (res.message) {
                    console.log(res.message);
                    this.User.exists = false;
                } else {
                    this.User.exists = true;
                    this.User = res;
                    this.User.exists = true;
                    console.log(this.User);
                    this.router.navigate(['home']);
                }
            })
    }
}
