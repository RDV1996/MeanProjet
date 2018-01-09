import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    thisID: number;
    post: Post;
    url;
    videoReady = false;

    constructor(public sanitizer: DomSanitizer, public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService) {
    }


    ngOnInit() {
        this.post = new Post();
        this.route.params.subscribe(params => {
            this.thisID = params['id'];
            this.postService.getPostById(this.thisID).subscribe(data => {
                this.post = this.postService.setOnePost(data);
                console.log(this.post);
                this.url = this.getVideoUrl();
                this.videoReady = true;
                console.log(this.url);
            });
        });
    }

    constructor(public
                    sanitizer: DomSanitizer) {
    }

    getVideoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.post.url);
    }
}