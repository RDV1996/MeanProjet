var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Post } from "../model/post.model";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PaginaService } from "../service/pagina.service";
import { PostService } from "../service/post.service";
import { CommentService } from "../service/comment.service";
var PostComponent = /** @class */ (function () {
    function PostComponent(sanitizer, router, route, authService, paginaService, postService, commentService) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.paginaService = paginaService;
        this.postService = postService;
        this.commentService = commentService;
        this.url = undefined;
        this.urlReady = false;
        this.collapsed = true;
    }
    PostComponent.prototype.onCollapse = function () {
        if (this.collapsed) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;
        }
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = new Post();
        this.route.params.subscribe(function (params) {
            _this.thisID = params['id'];
            _this.postService.getPostById(_this.thisID).subscribe(function (data) {
                _this.post = _this.postService.setOnePost(data);
                _this.url = _this.getVideoUrl();
                _this.urlReady = true;
                _this.authService.getName(_this.post.user).subscribe(function (data) {
                    _this.userName = data;
                });
                _this.paginaService.getName(_this.post.pagina).subscribe(function (data) {
                    _this.pageName = data;
                });
                _this.commentService.getComments(_this.post.id).subscribe(function (data) {
                    _this.comments = _this.commentService.setComments(data);
                });
            });
        });
    };
    PostComponent.prototype.getVideoUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.post.url);
    };
    PostComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.deleteAllComments();
        this.postService.deletePost(id).subscribe(function (data) {
            _this.router.navigateByUrl('/p/' + _this.post.pagina);
        });
    };
    PostComponent.prototype.deleteAllComments = function () {
        for (var i = 0; i < this.comments.length; i++) {
            this.commentService.deleteComment(this.comments[i]).subscribe(function (data) {
            });
        }
    };
    PostComponent = __decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer, Router, ActivatedRoute, AuthService, PaginaService, PostService, CommentService])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
