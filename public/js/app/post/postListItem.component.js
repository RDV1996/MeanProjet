var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Post } from "../model/post.model";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PostService } from "../service/post.service";
import { PaginaService } from "../service/pagina.service";
import { Pagina } from "../model/pagina.model";
import { TypeGebruikerService } from "../service/typeGebruiker.service";
import { CommentService } from "../service/comment.service";
var PostListItemComponent = /** @class */ (function () {
    function PostListItemComponent(commentService, typegrebruiker, sanitizer, router, postService, authService, paginaService) {
        this.commentService = commentService;
        this.typegrebruiker = typegrebruiker;
        this.sanitizer = sanitizer;
        this.router = router;
        this.postService = postService;
        this.authService = authService;
        this.paginaService = paginaService;
        this.userName = "";
        this.page = new Pagina("", "", "", [], "");
        this.hasupvoted = true;
        this.isAdmin = false;
        this.userhasupv();
    }
    PostListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getName(this.post.user).subscribe(function (data) {
            _this.userName = data;
        });
        this.paginaService.getPageById(this.post.pagina).subscribe(function (data) {
            _this.page = _this.paginaService.setPagina(data.pagina);
        });
        this.typegrebruiker.TypeGebruikerChanged.subscribe(function (data) {
            if (_this.typegrebruiker.currentType.typeNaaam) {
                _this.isAdmin = _this.typegrebruiker.currentType.typeNaaam.toLowerCase().includes("admin");
            }
        });
    };
    PostListItemComponent.prototype.userhasupv = function () {
        if (this.post != null) {
            return this.post.likes.indexOf(this.authService.user.id) == -1;
        }
        return false;
    };
    PostListItemComponent.prototype.isMod = function () {
        if (this.page) {
            return this.page.moderators.includes(this.authService.user.id);
        }
    };
    PostListItemComponent.prototype.upvote = function () {
        if (this.post.likes.length == 0) {
            this.post.likes = new Array();
        }
        if (this.userhasupv()) {
            this.post.likes.push(this.authService.user.id);
            this.hasupvoted = true;
        }
        else {
            var toDelete = this.post.likes.indexOf(this.authService.user.id);
            if (toDelete >= 0) {
                this.post.likes.splice(toDelete, 1);
            }
            this.hasupvoted = false;
        }
        this.postService.savePost(this.post).subscribe(function (data) {
        });
    };
    PostListItemComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.commentService.deletecommentsprompost(this.post.id).subscribe(function (data) {
        });
        this.postService.deletePost(id).subscribe(function (data) {
            _this.post = null;
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Post)
    ], PostListItemComponent.prototype, "post", void 0);
    PostListItemComponent = __decorate([
        Component({
            selector: 'app-postListItem',
            templateUrl: './postListItem.component.html',
            styleUrls: ['./postListItem.component.css']
        }),
        __metadata("design:paramtypes", [CommentService, TypeGebruikerService, DomSanitizer, Router, PostService, AuthService, PaginaService])
    ], PostListItemComponent);
    return PostListItemComponent;
}());
export { PostListItemComponent };
