import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {PostService} from "../service/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentModel} from "../model/comment.model";
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
    @Input() comment: CommentModel;
    @Input() show: boolean;
show:boolean;

    constructor(private commentService: CommentService, public postService: PostService, public authService: AuthService, public router: Router) {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            comment: new FormControl(null, Validators.required)
        });
        this.show = this.topcomment;
    }

    onSubmit() {
        console.log(this.comment);
        console.log(this.post);
        var comment = new CommentModel(
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
            if(this.comment != null){
                this.comment.childComments.push(temp.id);
                this.commentService.saveComment(this.comment).subscribe(data => {

                });
            }
            location.reload()
        });
        if(!this.topcomment){
            this.show=false;
        }

        console.log(comment);
    }
    cancel(){
        this.myForm.reset();
    }
}