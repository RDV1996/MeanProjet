import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post.component";

@NgModule({
    declarations: [
        PostComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [PostComponent]
})
export class PostModule {

}