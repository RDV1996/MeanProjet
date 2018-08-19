var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { User } from "../model/user.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { TypeGebruikerService } from "./typeGebruiker.service";
var AuthService = /** @class */ (function () {
    function AuthService(http, typegebruikerService) {
        this.http = http;
        this.typegebruikerService = typegebruikerService;
        this.LoggedIn = new EventEmitter();
        this.LoggedOut = new EventEmitter();
        this.user = new User();
    }
    AuthService.prototype.getCurrentUser = function () {
        return this.getUserById(localStorage.getItem("userId"));
    };
    AuthService.prototype.getUserById = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/user/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw("Error in getUserBuId in auth.Service.ts"); });
    };
    AuthService.prototype.setUser = function (data) {
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
    };
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('https://postsite.herokuapp.com/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw("Error in signup in auth.Service.ts"); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('https://postsite.herokuapp.com/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw("Error in Signin in auth.Service.ts"); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.LoggedOut.emit();
    };
    AuthService.prototype.isUserAdmin = function () {
        var _this = this;
        this.typegebruikerService.getTypeById(this.user.typeGebruiker).subscribe(function (data) {
            if (_this.isLoggedIn() && data.typeNaam == "ADMIN") {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') != null;
    };
    AuthService.prototype.saveUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('https://postsite.herokuapp.com/user/' + user.id, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    AuthService.prototype.getName = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/user/naam/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, TypeGebruikerService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
