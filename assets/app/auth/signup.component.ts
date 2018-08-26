import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user.model";
@Component ({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;

    constructor(private authService: AuthService){}

    onSubmit(){
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.username,
            "",
            "5a4d0a24ed2eb028a03f6543"
        );
        this.authService.signup(user)
            .subscribe(
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            username: new FormControl(null, Validators.required)
        })
    }

}