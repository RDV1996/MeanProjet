import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from '../app.routes';


import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        PostComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [PostComponent]
})
export class PostModule {

}