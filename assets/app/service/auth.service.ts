import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {TypeGebruikerService} from "./typeGebruiker.service";

@Injectable()
export class AuthService {
    LoggedIn: EventEmitter<User> = new EventEmitter();
    LoggedOut: EventEmitter<User> = new EventEmitter();

    public user: User = new User();
    isAdmin: boolean;

    constructor(private http: Http, private typegebruikerService: TypeGebruikerService) {
    }

    getCurrentUser() {
        return this.getUserById(localStorage.getItem("userId"));
    }

    getUserById(id: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/user/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw("Error in getUserBuId in auth.Service.ts"));
    }

    setUser(data) {
        this.user.about = data.user.about;
        this.user.comments = data.user.comments;
        this.user.email = data.user.email;
        this.user.posts = data.user.posts;
        this.user.subscripties = data.user.subscripties;

        this.user.typeGebruiker = data.user.typeGebruiker;
        this.user.username = data.user.username;
        this.user.wachtwoord = data.user.wachtwoord;
        this.user.id = data.user._id;
        this.isUserAdmin();
    }


    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://postsite.herokuapp.com/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw("Error in signup in auth.Service.ts"));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://postsite.herokuapp.com/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw("Error in Signin in auth.Service.ts"));
    }

    logout() {
        localStorage.clear();
        this.LoggedOut.emit();
    }

    isUserAdmin() {
        this.typegebruikerService.getTypeById(this.user.typeGebruiker).subscribe(data => {
            if (this.isLoggedIn() && data.typeNaam == "ADMIN") {
                this.isAdmin = true;
            }
            else {
                this.isAdmin = false;
            }
        });
    }

    isLoggedIn() {
        return localStorage.getItem('token') != null;
    }

    saveUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('https://postsite.herokuapp.com/user/' + user.id, body, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error : Error) => Observable.throw(error));
    }

    getName(id) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/user/naam/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error : Error) => Observable.throw(error));
    }
}