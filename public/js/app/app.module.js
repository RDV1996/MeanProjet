var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostListComponent } from "./post/postList.component";
import { PostComponent } from "./post/post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AuthService } from "./service/auth.service";
import { HttpModule } from "@angular/http";
import { ErrorService } from "./errors/error.service";
import { ErrorComponent } from "./errors/error.component";
import { PostService } from "./service/post.service";
import { HomeComponent } from "./home/home.component";
import { MakePageComponent } from "./pagina/makePage.component";
import { PaginaComponent } from "./pagina/pagina.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { PaginaService } from "./service/pagina.service";
import { SubscriptionListComponent } from "./home/SubscriptionList.component";
import { MakePostComponent } from "./post/makePost.component";
import { PostListItemComponent } from "./post/postListItem.component";
import { MakeCommentComponent } from "./comment/makeComment.component";
import { CommentService } from "./service/comment.service";
import { CommentComponent } from "./comment/comment.component";
import { TopCommentsComponent } from "./comment/TopCommentList.component";
import { UserPageComponent } from "./user/userPage.component";
import { PageModsComponent } from "./pagina/pageMods.component";
import { TypeGebruikerService } from "./service/typeGebruiker.service";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                TopCommentsComponent,
                UserPageComponent,
                PageModsComponent
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
