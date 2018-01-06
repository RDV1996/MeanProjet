import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostListComponent} from "./post/postList.component";
import {PostComponent} from "./post/post.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AuthService} from "./service/auth.service";
import {HttpModule} from "@angular/http";
import {ErrorService} from "./errors/error.service";
import {ErrorComponent} from "./errors/error.component";
import {PostService} from "./service/post.service";
import {HomeComponent} from "./home/home.component";
import {MakePageComponent} from "./pagina/makePage.component";
import {PaginaComponent} from "./pagina/pagina.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {PageNumberComponent} from "./pageNumber/pageNumber.component";
import {PaginaService} from "./service/pagina.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ErrorComponent,
        HomeComponent,
        PostComponent,
        PostListComponent,
        PaginaComponent,
        MakePageComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        PageNumberComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
    providers: [
        AuthService,
        PostService,
        ErrorService,
        PaginaService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}