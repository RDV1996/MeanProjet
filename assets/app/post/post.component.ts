import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";
import {Comment} from "../model/comment.model";
import {CommentService} from "../service/comment.service";
import {Pagina} from "../model/pagina.model";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    thisID: string = "";
    post: Post = new Post("","",false,"","",[],"",[],new Date());
    url: SafeResourceUrl;
    urlReady:boolean = false;
    userName: string ="";
    pagina: Pagina = new Pagina("","","",[],"");
    collapsed: boolean = false;
    comments: Comment[] = new Array();

    constructor(public sanitizer: DomSanitizer, public router: Router, public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService, public commentService: CommentService) {
        this.collapsed = true;
    }

    onCollapse() {
        if (this.collapsed) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;

        }
    }

    ngOnInit() {
        this.post = new Post();
        this.route.params.subscribe(params => {
            this.thisID = params['id'];
            this.postService.getPostById(this.thisID).subscribe(data => {
                this.post = this.postService.setOnePost(data);
                this.url = this.getVideoUrl();
                this.urlReady = true;
                this.authService.getName(this.post.user).subscribe(data => {
                    this.userName = data;
                });
                this.paginaService.getPageById(this.post.pagina).subscribe(data => {
                    this.pagina = this.paginaService.setPagina(data.pagina);
                });
                this.commentService.getComments(this.post.id).subscribe(data => {
                    this.comments = this.commentService.setComments(data);
                })
            });
        });
    }

    getVideoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.post.url);
    }

    onDelete(id) {
        this.deleteAllComments();
        this.postService.deletePost(id).subscribe(data => {
            this.router.navigateByUrl('/p/' + this.post.pagina);
        });
    }

    deleteAllComments() {
        for (var i = 0; i < this.comments.length; i++) {
            this.commentService.deleteComment(this.comments[i]).subscribe(data => {

            })
        }
    }

}