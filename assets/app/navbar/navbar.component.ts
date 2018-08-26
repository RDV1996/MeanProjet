import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import {PaginaService} from "../service/pagina.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    //used to check if person is logged in and if they are admin
    isAdmin: boolean = false;
    isLoggedin: boolean = false;
    naam: string = "";
    subscribed: Pagina[] = new Array();
    user: User = new User("","","","","",[],[],[]);
    users:User[] = new Array();
    myForm: FormGroup;

    ngOnInit(){
        this.myForm = new FormGroup({
            username: new FormControl(null)
        });
    }

    constructor(private authService: AuthService, private router: Router, private paginaService: PaginaService) {
        this.subscribed = new Array();
        if (authService.isLoggedIn()) {
            this.authService.getCurrentUser()
                .subscribe(
                    data => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.user._id);
                        this.authService.LoggedIn.emit();
                        this.authService.setUser(data);
                        this.getSubscriptions();
                    },
                    error => console.log(error)
                );
            this.user = authService.user;
        }



        //check on initialize
        this.isLoggedin = authService.isLoggedIn();
        this.isAdmin = authService.isAdmin;
        //eventemmitters in Auth.service send warning when logged in or logged out
        authService.LoggedIn.subscribe(loggedIn => {
            this.isLoggedin = authService.isLoggedIn();
            this.isAdmin = authService.isAdmin;
            this.user = authService.user;
            this.getSubscriptions();
        });
        authService.LoggedOut.subscribe(loggedIn => {
            this.isLoggedin = authService.isLoggedIn();
            this.isAdmin = authService.isAdmin
            this.subscribed = new Array();
        });
    }

    isOwner(id){
        return this.authService.user.id === id;
    }

    unsubscribe(){
        console.log("unsubscribe");
    }

    getSubscriptions() {
        this.subscribed = new Array();
        if(this.authService.user.subscripties){
        for (var i = 0; i < this.authService.user.subscripties.length; i++) {
            this.paginaService.getPageById(this.authService.user.subscripties[i])
                .subscribe(
                    data => {
                        this.subscribed.push(this.paginaService.setPagina(data.pagina));
                    }
                )
        }
        }
    }
    setUsers(){
        if(this.myForm.value.username !== ""){
            this.authService.getByName(this.myForm.value.username).subscribe(data => {
                this.users = this.authService.setUsers(data);
            })
        }
    }

    //when they log out, clear local storage and go to login page
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
