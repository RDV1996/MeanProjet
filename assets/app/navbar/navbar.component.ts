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

    constructor(private authService: AuthService, private router: Router) {
        if (authService.isLoggedIn()) {
            this.authService.getCurrentUser()
                .subscribe(
                    data => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.user._id);
                        this.router.navigateByUrl('/');
                        this.authService.setUser(data);
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

    ngOnInit() {
    }

    //when they log out, clear local storage and go to login page
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
