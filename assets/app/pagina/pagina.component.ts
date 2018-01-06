import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
    posts:Post[];
    constructor(public sanitizer: DomSanitizer){}

}