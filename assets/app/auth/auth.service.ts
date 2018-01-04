import {User} from "./user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService{
    LoggedIn: EventEmitter<User> = new EventEmitter();
    LoggedOut: EventEmitter<User> = new EventEmitter();

    public user:User = new User();
    constructor(private http:Http){
    }

    getCurrentUser(){
        const headers = new Headers({'Content-type': 'application/json'});
        var gebruikerId = localStorage.getItem("userId");
        return this.http.get('http://localhost:3000/user/' + gebruikerId, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setUser(data){
        this.user.about = data.user.about;
        this.user.comments = data.user.comments;
        this.user.email = data.user.email;
        this.user.posts = data.user.posts;
        this.user.subscripties = data.user.subscripties;
        this.user.typeGebruiker = data.user.typeGebruiker;
        this.user.username = data.user.username;
        this.user.wachtwoord = data.user.wachtwoord;
        this.user.id = data.user._id;
        this.LoggedIn.emit();
    }

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
            return Observable.throw(error.json())
        });
    }

    signin(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    logout(){
        localStorage.clear();
        this.LoggedOut.emit();
    }

    isAdmin(){

    }

    isLoggedIn(){
        return localStorage.getItem('token') != null;
    }
}