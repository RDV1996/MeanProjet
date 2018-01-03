import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {PostListComponent} from "./post/postList.component";
import {PostModule} from "./post/post.module";
import {PostComponent} from "./post/post.component";

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}