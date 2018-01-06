import {Component} from '@angular/core';
import {Post} from "./post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {PostService} from "./post.service";

@Component({
    selector: 'app-postList',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.css']
})
export class PostListComponent {
    constructor(public sanitizer: DomSanitizer, public router: Router,public postService:PostService){}

    posts = this.postService.getAllPosts();

}