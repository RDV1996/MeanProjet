import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PostService} from "../service/post.service";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {TypeGebruikerService} from "../service/typeGebruiker.service";
import {CommentService} from "../service/comment.service";

@Component({
    selector: 'app-postListItem',
    templateUrl: './postListItem.component.html',
    styleUrls: ['./postListItem.component.css']
})
export class PostListItemComponent implements OnInit{
    @Input() post: Post;
    userName ="";
    page: Pagina = new Pagina("","","",[],"");
    hasupvoted: boolean = true;
    isAdmin: boolean = false;


    constructor(public commentService: CommentService,public typegrebruiker : TypeGebruikerService ,public sanitizer: DomSanitizer, public router: Router, public postService: PostService, public authService: AuthService, private paginaService: PaginaService) {


        this.userhasupv();
    }
    ngOnInit(){
        this.authService.getName(this.post.user).subscribe(data => {
            this.userName = data;
        });
        this.paginaService.getPageById(this.post.pagina).subscribe(data => {
            this.page = this.paginaService.setPagina(data.pagina);
        });
        this.typegrebruiker.TypeGebruikerChanged.subscribe(data =>{
            if(this.typegrebruiker.currentType.typeNaaam){
                this.isAdmin = this.typegrebruiker.currentType.typeNaaam.toLowerCase().includes("admin");
            }
        })
    }

    userhasupv() {
        if (this.post != null) {
            return this.post.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    }

    isMod() {
        if(this.page){
            return this.page.moderators.includes(this.authService.user.id);
        }
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
        this.commentService.deletecommentsprompost(this.post.id).subscribe(data=>{

        });
        this.postService.deletePost(id).subscribe(data =>{
        this.post=null;
        });
    }

}