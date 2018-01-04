import {LogoutComponent} from "./logout.component";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {routes} from "../app.routes";
import {RouterModule} from "@angular/router";
@NgModule({
    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ]
})
export class AuthModule{

}
