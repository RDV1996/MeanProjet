import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import forEach = require("core-js/fn/array/for-each");
import {PaginaService} from "../service/pagina.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
    //used to check if person is logged in and if they are admin
    isAdmin: boolean;
    isLoggedin: boolean;
    naam: string;
    subscribed: Pagina[];

    constructor(private authService: AuthService, private router: Router, private paginaService: PaginaService) {
        this.subscribed = new Array();
        if (authService.isLoggedIn()) {
            this.authService.getCurrentUser()
                .subscribe(
                    data => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.user._id);
                        this.authService.LoggedIn.emit();
                        this.naam = authService.user.username;
                        this.authService.setUser(data);
                        this.getSubscriptions();
                    },
                    error => console.log(error)
                );
        }



        //check on initialize
        this.isLoggedin = authService.isLoggedIn();
        this.isAdmin = authService.isAdmin();
        //eventemmitters in Auth.service send warning when logged in or logged out
        authService.LoggedIn.subscribe(loggedIn => this.isLoggedin = authService.isLoggedIn());
        authService.LoggedIn.subscribe(loggedIn => this.isAdmin = authService.isAdmin());
        authService.LoggedIn.subscribe(loggedIn => this.naam = authService.user.username);
        authService.LoggedOut.subscribe(loggedIn => this.isLoggedin = authService.isLoggedIn());
        authService.LoggedOut.subscribe(loggedIn => this.isAdmin = authService.isAdmin());
    }

    isOwner(id){
        return this.authService.user.id === id;
    }

    unsubscribe(){
        console.log("unsubscribe");
    }

    getSubscriptions() {
        var subs = new Array();
        for (var i = 0; i < this.authService.user.subscripties.length; i++) {
            this.paginaService.getPageById(this.authService.user.subscripties[i])
                .subscribe(
                    data => {
                        this.subscribed.push(this.paginaService.setPagina(data.pagina));
                    }
                )
        }
    }

    //when they log out, clear local storage and go to login page
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
