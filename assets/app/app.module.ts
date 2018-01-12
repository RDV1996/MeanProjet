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
import {PaginaService} from "./service/pagina.service";
import {SubscriptionListComponent} from "./home/SubscriptionList.component";
import {MakePostComponent} from "./post/makePost.component";
import {PostListItemComponent} from "./post/postListItem.component";
import {MakeCommentComponent} from "./comment/makeComment.component";
import {CommentService} from "./service/comment.service";
import {CommentComponent} from "./comment/comment.component";
import {TopCommentsComponent} from "./comment/TopCommentList.component";
import {TypeGebruikerService} from "./service/typeGebruiker.service";

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
        SignupComponent,
        SigninComponent,
        SubscriptionListComponent,
        MakePostComponent,
        PostListItemComponent,
        MakeCommentComponent,
        CommentComponent,
        TopCommentsComponent
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
        PaginaService,
        CommentService,
        TypeGebruikerService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}