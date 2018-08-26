import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";
import {PostService} from "../service/post.service";
import {Comment} from "../model/comment.model";
import {AuthService} from "../service/auth.service";
import {CommentService} from "../service/comment.service";
import {TypeGebruikerService} from "../service/typeGebruiker.service";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() post: Post;
    @Input() thiscomment: Comment;
    @Input() topcomment: boolean;
    @Input() comments: Comment[];
    @Input() page:Pagina;
    @Input() parentComment:Comment;


    userName: string= "";
    hasupvoted: boolean = true;
    showReply: boolean = false;
    childComments: Comment[];
    edit: boolean = false;
    isAdmin: boolean = false;

    constructor(public typegrebruiker : TypeGebruikerService, private authService: AuthService, public commentService: CommentService) {
    }

    ngOnInit() {
        this.authService.getName(this.thiscomment.user).subscribe(data => {
            this.userName = data;
            this.getChildComments();
        });
        this.typegrebruiker.TypeGebruikerChanged.subscribe(data =>{
                this.isAdmin = this.typegrebruiker.currentType.typeNaaam.toLowerCase().includes("admin");
        })
    }
    isMod() {
            return this.page.moderators.includes(this.authService.user.id);
    }

    getChildComments(){
        if(this.thiscomment.childComments.length != 0){
            this.childComments = new Array();
            for (var i = 0; i <= this.thiscomment.childComments.length -1; i++) {
                this.commentService.getComment(this.thiscomment.childComments[i]).subscribe(data => {
                    this.childComments.push(this.commentService.setComment(data));
                })
            }
        }
    }

    userhasupv() {
        if (this.thiscomment != null) {
            return this.thiscomment.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    }


    upvote() {
        if (this.thiscomment.likes.length == 0) {
            this.thiscomment.likes = new Array();
        }
        if (this.userhasupv()) {
            this.thiscomment.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            let toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.commentService.saveComment(this.thiscomment).subscribe(data => {
        });
    }

    onDelete() {
        if(this.parentComment){
            this.parentComment.childComments.splice(this.parentComment.childComments.indexOf(this.thiscomment.id),1);
            this.commentService.saveComment(this.parentComment).subscribe(data=>{
            })
        }
        this.commentService.deleteComment(this.thiscomment).subscribe(data => {

        });
        this.thiscomment = null;

    }

    onReply() {
        if(!this.showReply  || this.edit) {
            this.showReply = true;
        }
        else{
            this.showReply = false;
        }
        this.edit = false;
    }

    onEdit(){
        if(!this.showReply || !this.edit) {
            this.showReply = true;
        }
        else{
            this.showReply = false;
        }
        this.edit = true;
    }

}