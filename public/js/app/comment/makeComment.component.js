var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { PostService } from "../service/post.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Comment } from "../model/comment.model";
import { AuthService } from "../service/auth.service";
import { Post } from "../model/post.model";
import { CommentService } from "../service/comment.service";
import { Router } from "@angular/router";
var MakeCommentComponent = /** @class */ (function () {
    function MakeCommentComponent(commentService, postService, authService, router) {
        this.commentService = commentService;
        this.postService = postService;
        this.authService = authService;
        this.router = router;
        this.topcomment = true;
        this.show = true;
    }
    MakeCommentComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            comment: new FormControl(null, Validators.required)
        });
        this.show = this.topcomment;
    };
    MakeCommentComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.comment);
        console.log(this.post);
        var comment = new Comment("", this.myForm.value.comment, null, this.topcomment, this.authService.user.id, this.post.id, [], [this.authService.user.id]);
        this.myForm.reset();
        this.commentService.createComment(comment).subscribe(function (data) {
            var temp = _this.commentService.setComment(data);
            if (_this.comment != null) {
                _this.comment.childComments.push(temp.id);
                _this.commentService.saveComment(_this.comment).subscribe(function (data) {
                });
            }
            location.reload();
        });
        if (!this.topcomment) {
            this.show = false;
        }
        console.log(comment);
    };
    MakeCommentComponent.prototype.cancel = function () {
        this.myForm.reset();
    };
    __decorate([
        Input(),
        __metadata("design:type", Post)
    ], MakeCommentComponent.prototype, "post", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MakeCommentComponent.prototype, "topcomment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Comment)
    ], MakeCommentComponent.prototype, "comment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MakeCommentComponent.prototype, "show", void 0);
    MakeCommentComponent = __decorate([
        Component({
            selector: 'app-MakeComment',
            templateUrl: './makeComment.component.html',
            styleUrls: ['./makeComment.component.css']
        }),
        __metadata("design:paramtypes", [CommentService, PostService, AuthService, Router])
    ], MakeCommentComponent);
    return MakeCommentComponent;
}());
export { MakeCommentComponent };
