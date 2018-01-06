import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {PostListComponent} from "./post/postList.component";
import {PostComponent} from "./post/post.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";
import {HttpModule} from "@angular/http";
import {ErrorService} from "./errors/error.service";
import {ErrorComponent} from "./errors/error.component";
import {PaginaModule} from "./pagina/pagina.module";
import {PostModule} from "./post/post.module";
import {PostService} from "./post/post.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        AuthModule,
        PaginaModule,
        PostModule
    ],
    providers: [
        AuthService,
        PostService,
        ErrorService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}