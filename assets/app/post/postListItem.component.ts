import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PostService} from "../service/post.service";
import {PaginaService} from "../service/pagina.service";

@Component({
    selector: 'app-postListItem',
    templateUrl: './postListItem.component.html',
    styleUrls: ['./postListItem.component.css']
})
export class PostListItemComponent implements OnInit{
    @Input() post: Post;
    userName;
    pageName;
    hasupvoted: true;

    constructor(public sanitizer: DomSanitizer, public router: Router, public postService: PostService, public authService: AuthService, private paginaService: PaginaService) {


        this.userhasupv();
    }
    ngOnInit(){
        this.authService.getName(this.post.user).subscribe(data => {
            this.userName = data;
        });
        this.paginaService.getName(this.post.pagina).subscribe(data => {
            this.pageName = data;
        });
    }

    userhasupv() {
        if (this.post != null) {
            return this.post.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    }


    upvote() {
        if (this.post.likes.length == 0) {
            this.post.likes = new Array();
        }
        if (this.userhasupv()) {
            this.post.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            let toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.postService.savePost(this.post).subscribe(data => {
        });
    }

    onDelete(id){
        this.postService.deletePost(id).subscribe(data =>{
        this.post=null;
        });
    }
}