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
import { Pagina } from "../model/pagina.model";
import { Post } from "../model/post.model";
import { Comment } from "../model/comment.model";
import { AuthService } from "../service/auth.service";
import { CommentService } from "../service/comment.service";
import { TypeGebruikerService } from "../service/typeGebruiker.service";
var CommentComponent = /** @class */ (function () {
    function CommentComponent(typegrebruiker, authService, commentService) {
        this.typegrebruiker = typegrebruiker;
        this.authService = authService;
        this.commentService = commentService;
        this.userName = "";
        this.hasupvoted = true;
        this.showReply = false;
        this.edit = false;
        this.isAdmin = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getName(this.thiscomment.user).subscribe(function (data) {
            _this.userName = data;
            _this.getChildComments();
        });
        this.typegrebruiker.TypeGebruikerChanged.subscribe(function (data) {
            _this.isAdmin = _this.typegrebruiker.currentType.typeNaaam.toLowerCase().includes("admin");
        });
    };
    CommentComponent.prototype.isMod = function () {
        return this.page.moderators.includes(this.authService.user.id);
    };
    CommentComponent.prototype.getChildComments = function () {
        var _this = this;
        if (this.thiscomment.childComments.length != 0) {
            this.childComments = new Array();
            for (var i = 0; i <= this.thiscomment.childComments.length - 1; i++) {
                this.commentService.getComment(this.thiscomment.childComments[i]).subscribe(function (data) {
                    _this.childComments.push(_this.commentService.setComment(data));
                });
            }
        }
    };
    CommentComponent.prototype.userhasupv = function () {
        if (this.thiscomment != null) {
            return this.thiscomment.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    };
    CommentComponent.prototype.upvote = function () {
        if (this.thiscomment.likes.length == 0) {
            this.thiscomment.likes = new Array();
        }
        if (this.userhasupv()) {
            this.thiscomment.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            var toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.commentService.saveComment(this.thiscomment).subscribe(function (data) {
        });
    };
    CommentComponent.prototype.onDelete = function () {
        if (this.parentComment) {
            this.parentComment.childComments.splice(this.parentComment.childComments.indexOf(this.thiscomment.id), 1);
            this.commentService.saveComment(this.parentComment).subscribe(function (data) {
            });
        }
        this.commentService.deleteComment(this.thiscomment).subscribe(function (data) {
        });
        this.thiscomment = null;
    };
    CommentComponent.prototype.onReply = function () {
        if (!this.showReply || this.edit) {
            this.showReply = true;
        }
        else {
            this.showReply = false;
        }
        this.edit = false;
    };
    CommentComponent.prototype.onEdit = function () {
        if (!this.showReply || !this.edit) {
            this.showReply = true;
        }
        else {
            this.showReply = false;
        }
        this.edit = true;
    };
    __decorate([
        Input(),
        __metadata("design:type", Post)
    ], CommentComponent.prototype, "post", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Comment)
    ], CommentComponent.prototype, "thiscomment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "topcomment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CommentComponent.prototype, "comments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Pagina)
    ], CommentComponent.prototype, "page", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Comment)
    ], CommentComponent.prototype, "parentComment", void 0);
    CommentComponent = __decorate([
        Component({
            selector: 'app-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        }),
        __metadata("design:paramtypes", [TypeGebruikerService, AuthService, CommentService])
    ], CommentComponent);
    return CommentComponent;
}());
export { CommentComponent };
