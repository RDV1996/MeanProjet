import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../post/post.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {

    constructor(public sanitizer: DomSanitizer){}

    @Input() post: Post;
}