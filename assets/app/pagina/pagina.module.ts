import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from '../app.routes';


import {FormsModule} from "@angular/forms";
import {PostComponent} from "../post/post.component";
import {RouterModule} from "@angular/router";
import {PaginaComponent} from "./pagina.component";
import {MakePageComponent} from "./makePage.component";

@NgModule({
    declarations: [
        PaginaComponent,
        MakePageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [PostComponent]
})
export class PaginaModule {

}