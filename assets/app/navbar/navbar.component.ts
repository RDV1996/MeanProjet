import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    //used to check if person is logged in and if they are admin
    isAdmin: boolean;
    isLoggedin: boolean;
    naam: string;

    constructor(private service: AuthService, private router: Router) {
        this.service.getCurrentUser()
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.user._id);
                    this.router.navigateByUrl('/');
                    this.service.setUser(data);
                    console.log(this.service.user);
                },
                error => console.log(error)
            );
        //check on initialize
        this.isLoggedin = service.isLoggedIn();
        this.isAdmin = service.isAdmin();
        //eventemmitters in Auth.service send warning when logged in or logged out
        service.LoggedIn.subscribe(loggedIn => this.isLoggedin = service.isLoggedIn());
        service.LoggedIn.subscribe(loggedIn => this.isAdmin = service.isAdmin());
        service.LoggedIn.subscribe(loggedIn => this.naam = service.user.username);
        service.LoggedOut.subscribe(loggedIn => this.isLoggedin = service.isLoggedIn());
        service.LoggedOut.subscribe(loggedIn => this.isAdmin = service.isAdmin());
    }

    ngOnInit() {
    }

    //when they log out, clear local storage and go to login page
    onLogout() {
        this.service.logout();
        this.router.navigate(['/']);
    }
}
