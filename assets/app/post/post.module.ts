import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from '../app.routes';


import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post.component";
import {RouterModule} from "@angular/router";
import {PostListComponent} from "./postList.component";

@NgModule({
    declarations: [
        PostComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [PostComponent]
})
export class PostModule {

}