import {Component, Input} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PostService} from "../service/post.service";

@Component({
    selector: 'app-postList',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.css']
})
export class PostListComponent {
    @Input() posts: Post[];

    constructor(public sanitizer: DomSanitizer, public router: Router,public postService:PostService){}
}