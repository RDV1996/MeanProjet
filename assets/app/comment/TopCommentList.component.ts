import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {CommentModel} from "../model/comment.model";
import {Post} from "../model/post.model";

@Component({
    selector: 'app-topComments',
    template: `
        <div *ngFor="let comment of comments">
            <app-comment [comment]="comment" [post]="post" *ngIf="comment.isTopComment" [comments]="comments" [topcomment]="true"></app-comment>
        </div>
    `,
    style: ``
})
export class TopCommentsComponent implements OnInit{
    @Input() comments: CommentModel[];
    @Input() post:Post;

    constructor(){
    }
ngOnInit(){
    console.log(this.comments);
}
}