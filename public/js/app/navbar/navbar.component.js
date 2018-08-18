var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PaginaService } from "../service/pagina.service";
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, paginaService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.paginaService = paginaService;
        this.subscribed = new Array();
        if (authService.isLoggedIn()) {
            this.authService.getCurrentUser()
                .subscribe(function (data) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.user._id);
                _this.authService.LoggedIn.emit();
                _this.authService.setUser(data);
                _this.naam = authService.user.username;
                _this.getSubscriptions();
            }, function (error) { return console.log(error); });
            this.user = authService.user;
        }
        //check on initialize
        this.isLoggedin = authService.isLoggedIn();
        this.isAdmin = authService.isAdmin;
        //eventemmitters in Auth.service send warning when logged in or logged out
        authService.LoggedIn.subscribe(function (loggedIn) {
            _this.isLoggedin = authService.isLoggedIn();
            _this.isAdmin = authService.isAdmin;
            _this.naam = authService.user.username;
        });
        authService.LoggedOut.subscribe(function (loggedIn) {
            _this.isLoggedin = authService.isLoggedIn();
            _this.isAdmin = authService.isAdmin;
        });
    }
    NavbarComponent.prototype.isOwner = function (id) {
        return this.authService.user.id === id;
    };
    NavbarComponent.prototype.unsubscribe = function () {
        console.log("unsubscribe");
    };
    NavbarComponent.prototype.getSubscriptions = function () {
        var _this = this;
        var subs = new Array();
        for (var i = 0; i < this.authService.user.subscripties.length; i++) {
            this.paginaService.getPageById(this.authService.user.subscripties[i])
                .subscribe(function (data) {
                _this.subscribed.push(_this.paginaService.setPagina(data.pagina));
            });
        }
    };
    //when they log out, clear local storage and go to login page
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        __metadata("design:paramtypes", [AuthService, Router, PaginaService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
