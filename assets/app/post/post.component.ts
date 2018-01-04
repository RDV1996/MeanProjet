import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "./post.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    constructor(public sanitizer: DomSanitizer){}

    @Input() post: Post;
}