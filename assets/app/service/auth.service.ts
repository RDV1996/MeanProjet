import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
    LoggedIn: EventEmitter<User> = new EventEmitter();
    LoggedOut: EventEmitter<User> = new EventEmitter();

    public user: User = new User();

    constructor(private http: Http) {
    }

    getCurrentUser() {
        return this.getUserById(localStorage.getItem("userId"));
    }

    getUserById(id: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/user/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setUser(data) {
        this.user.about = data.user.about;
        this.user.comments = data.user.comments;
        this.user.email = data.user.email;
        this.user.posts = data.user.posts;
        this.user.subscripties = new Array();
        for(var i =0; i < data.user.subscripties.length;i++){
            this.user.subscripties.push(data.user.subscripties[i])
        }
        this.user.typeGebruiker = data.user.typeGebruiker;
        this.user.username = data.user.username;
        this.user.wachtwoord = data.user.wachtwoord;
        this.user.id = data.user._id;
        console.log(this.user);
    }


    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    logout() {
        localStorage.clear();
        this.LoggedOut.emit();
    }

    isAdmin() {
        try {
            if (this.isLoggedIn()) {
                return this.user.typeGebruiker.typeNaaam === "ADMIN";
            }
        }
        catch (err) {
            return false;
        }
    }

    isLoggedIn() {
        return localStorage.getItem('token') != null;
    }

    saveUser(user: User) {
        console.log(user);
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log("start http");
        return this.http.put('http://localhost:3000/user/' + user.id, body, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}