import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {PostService} from "../service/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../model/comment.model";
import {AuthService} from "../service/auth.service";
import {Post} from "../model/post.model";
import {CommentService} from "../service/comment.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-MakeComment',
    templateUrl: './makeComment.component.html',
    styleUrls: ['./makeComment.component.css']
})
export class MakeCommentComponent implements OnInit {
    @Input() post: Post;
    myForm: FormGroup;
    @Input() topcomment: boolean;
    @Input() comment: Comment;
    @Input() show: boolean;
    @Input() Edit: boolean;

    constructor(private commentService: CommentService, public postService: PostService, public authService: AuthService, public router: Router) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            comment: new FormControl(null, Validators.required)
        });

        this.show = <boolean>this.topcomment;
    }

    getButtonText(){
        if(this.Edit){
            return "Edit";
        }
        return "Submit";
    }
    getHeaderText(){
        if(this.Edit){
            return "Edit Comment";
        }
        return "Make Comment";
    }

    onSubmit() {
        if(!this.Edit) {
            var comment = new Comment(
                "",
                this.myForm.value.comment,
                null,
                this.topcomment,
                this.authService.user.id,
                this.post.id,
                [],
                [this.authService.user.id]
            );
            this.myForm.reset();
            this.commentService.createComment(comment).subscribe(data => {
                var temp = this.commentService.setComment(data);
                if (this.comment) {
                    this.comment.childComments.push(temp.id);
                    this.commentService.saveComment(this.comment).subscribe(data => {
                        location.reload()
                    });
                }
                else {
                    location.reload()

                }
            });
        }
        else{
            this.comment.body = this.myForm.value.comment;
            this.commentService.saveComment(this.comment).subscribe(data=>{
                location.reload()
            })
        }
    }
    cancel(){
        this.myForm.reset();
    }
}