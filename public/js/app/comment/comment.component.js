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
import { Post } from "../model/post.model";
import { Comment } from "../model/comment.model";
import { AuthService } from "../service/auth.service";
import { CommentService } from "../service/comment.service";
var CommentComponent = /** @class */ (function () {
    function CommentComponent(authService, commentService) {
        this.authService = authService;
        this.commentService = commentService;
        this.hasupvoted = true;
        this.showReply = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getName(this.comment.user).subscribe(function (data) {
            _this.userName = data;
        });
        console.log(this.comment);
        this.childComments = new Array();
        for (var i = 0; i < this.comment.childComments.length; i++) {
            this.commentService.getComment(this.comment.childComments[i]).subscribe(function (data) {
                _this.childComments.push(_this.commentService.setComment(data));
            });
        }
    };
    CommentComponent.prototype.userhasupv = function () {
        if (this.comment != null) {
            return this.comment.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    };
    CommentComponent.prototype.upvote = function () {
        if (this.comment.likes.length == 0) {
            this.comment.likes = new Array();
        }
        if (this.userhasupv()) {
            this.comment.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            var toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.commentService.saveComment(this.comment).subscribe(function (data) {
        });
    };
    CommentComponent.prototype.onDelete = function () {
        this.commentService.deleteComment(this.comment).subscribe(function (data) {
        });
        this.comment = null;
    };
    CommentComponent.prototype.onReply = function () {
        this.showReply = !this.showReply;
    };
    __decorate([
        Input(),
        __metadata("design:type", Post)
    ], CommentComponent.prototype, "post", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Comment)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "topcomment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CommentComponent.prototype, "comments", void 0);
    CommentComponent = __decorate([
        Component({
            selector: 'app-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        }),
        __metadata("design:paramtypes", [AuthService, CommentService])
    ], CommentComponent);
    return CommentComponent;
}());
export { CommentComponent };
