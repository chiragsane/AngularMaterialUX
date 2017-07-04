import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserService {
    URL = 'http://10.103.21.186:8080';
    User = {
        exists: true,
        _id: '',
        name: '',
        username: '',
        password: ''
    };
    constructor(private http: Http, private _service: NotificationsService) { }

    checkUser(user) {
        return this.http.post(`${this.URL}/api/authenticate`, user).map(res => {
            const resJson = res.json();
            if (resJson.reply) {
                const reply = resJson.reply;
                this._service.error(`${reply}`, 'Error', { timeOut: 5000, showProgressBar: false });
                this.User.exists = false;
            } else {
                this.User = resJson;
                this.User.exists = true;
                this._service.success(`Welcome ${this.User.name}`, 'Logged In', { timeOut: 5000, showProgressBar: false });
            }
            return resJson;
        }, err => {
            console.log(err);
        })
    }
    locateUser(latitude, longitude) {
        this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`).map(res => {
            console.log(res)
        })
    }
    addUser(user) {
        return this.http.post(`${this.URL}/api/users`, user).map(res => {
            const resJson = res.json();
            const reply = resJson['reply'];
            this._service.success('Success', `${reply}`, { timeOut: 5000, showProgressBar: false });
            return resJson;
        }, err => {
            console.log(err);
        })
    }
    getUsers() {
        return this.http.get(`${this.URL}/api/users`).map(res => {
            const resJson = res.json();
            return resJson;
        }, err => {
            console.log(err);
        })
    }
    deleteUser(user_id) {
        return this.http.delete(`${this.URL}/api/users/${user_id}`).map(res => {
            const resJson = res.json();
            const reply = resJson['reply'];
            this._service.success('Sucess', `${reply}`, { timeOut: 5000, showProgressBar: false });
            return resJson;
        })
    }
}
