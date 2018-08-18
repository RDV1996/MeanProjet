import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = "";

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    onSubmit() {

        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.user._id);
                    this.authService.LoggedIn.emit();
                    this.myForm.reset();
                    this.router.navigateByUrl('/');
                    this.authService.setUser(data);
                    this.authService.isLoggedIn();
                },
                error => {
                    console.log(error);
                    this.error = "Login failed, wrong email or password";
                }
            );

    }

}

