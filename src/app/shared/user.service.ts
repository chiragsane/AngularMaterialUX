import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

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
    constructor(private http: Http, private _service: NotificationsService) { }

    checkUser(user) {
        return this.http.post(`${this.URL}/api/authenticate`, user)
            .map(res => {
                const resJson = res.json();
                if (resJson['message']) {
                    const message = resJson['message'];
                    this._service.error('Error', `${message}`, { timeOut: 5000, showProgressBar: false });
                    this.User.exists = false;
                } else {
                    this.User = resJson;
                    this.User.exists = true;
                    this._service.success('Welcome', `${this.User.name}`, { timeOut: 5000, showProgressBar: false });
                }
                return resJson;
            },
            err => {
                console.log(err);
            })
    }
    addUser(user) {
        return this.http.post(`${this.URL}/api/users`, user)
            .map(res => {
                const resJson = res.json();
                const message = resJson['message'];
                this._service.success('Success', `${message}`, { timeOut: 5000, showProgressBar: false });
                this.User.exists = false;
                return resJson;
            },
            err => {
                console.log(err);
            })
    }
}
