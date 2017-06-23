import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
    constructor(private http: Http) { }

    checkUser(user) {
        return this.http.post(`${this.URL}/api/authenticate`, user)
            .map(res => {
                const resJson = res.json();
                if (resJson['message']) {
                    console.log(resJson['message']);
                    this.User.exists = false;
                } else {
                    this.User = resJson;
                    this.User.exists = true;
                }
                return resJson;
            })
    }
}
