import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";
import {PostService} from "../service/post.service";
import {Comment} from "../model/comment.model";
import {AuthService} from "../service/auth.service";
import {CommentService} from "../service/comment.service";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    @Input() post: Post;
    @Input() comment: Comment;
    @Input() topcomment: boolean;
    @Input() comments: Comment[];
    userName: string;
    hasupvoted: boolean = true;
    showReply: boolean = false;
    childComments: Comment[];

    constructor(private authService: AuthService, public commentService: CommentService) {
    }

    ngOnInit() {
        this.authService.getName(this.comment.user).subscribe(data => {
            this.userName = data;
        });
        console.log(this.comment);
        this.childComments = new Array();
        for (var i = 0; i < this.comment.childComments.length; i++) {
            this.commentService.getComment(this.comment.childComments[i]).subscribe(data => {
                this.childComments.push(this.commentService.setComment(data));
            })

        }

    }

    userhasupv() {
        if (this.comment != null) {
            return this.comment.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    }


    upvote() {
        if (this.comment.likes.length == 0) {
            this.comment.likes = new Array();
        }
        if (this.userhasupv()) {
            this.comment.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            let toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.commentService.saveComment(this.comment).subscribe(data => {
        });
    }

    onDelete() {
        this.commentService.deleteComment(this.comment).subscribe(data => {

        });
        this.comment = null;

    }

    onReply() {
        this.showReply = !this.showReply;
    }

}