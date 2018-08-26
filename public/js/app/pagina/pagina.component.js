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
import { DomSanitizer } from "@angular/platform-browser";
import { Pagina } from "../model/pagina.model";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PaginaService } from "../service/pagina.service";
import { PostService } from "../service/post.service";
import { User } from "../model/user.model";
import { TypeGebruikerService } from "../service/typeGebruiker.service";
import { CommentService } from '../service/comment.service';
var PaginaComponent = /** @class */ (function () {
    function PaginaComponent(router, commentService, typegrebruiker, sanitizer, route, authService, paginaService, postService) {
        this.router = router;
        this.commentService = commentService;
        this.typegrebruiker = typegrebruiker;
        this.sanitizer = sanitizer;
        this.route = route;
        this.authService = authService;
        this.paginaService = paginaService;
        this.postService = postService;
        this.thispage = new Pagina("", "", "", [], "");
        this.posts = new Array();
        this.subscribed = false;
        this.ingelogd = false;
        this.owner = new User("", "", "", "", "", [], [], []);
        this.mods = new Array();
        this.thsiID = "";
        this.maxpages = 0;
        this.pagina = 1;
        this.isAdmin = false;
    }
    PaginaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.thsiID = params['id'];
            _this.paginaService.getPageById(_this.thsiID).subscribe(function (data) {
                _this.thispage = _this.paginaService.setPagina(data.pagina);
                _this.subscribed = _this.isSubscribed();
                _this.getOwner();
                _this.getMods();
                _this.getPosts();
            });
        });
        this.ingelogd = this.authService.isLoggedIn();
        this.typegrebruiker.TypeGebruikerChanged.subscribe(function (data) {
            _this.isAdmin = _this.typegrebruiker.currentType.typeNaaam.toLowerCase().includes("admin");
        });
    };
    PaginaComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPostsBySub(this.thsiID, this.pagina).subscribe(function (data) {
            _this.posts = _this.postService.setSubData(data);
            _this.maxpages = _this.postService.subPages;
        });
    };
    PaginaComponent.prototype.isSubscribed = function () {
        if (this.authService.isLoggedIn()) {
            return this.authService.user.subscripties.includes(this.thispage.id);
        }
    };
    PaginaComponent.prototype.getMods = function () {
        var _this = this;
        this.mods = new Array();
        for (var i = 0; i <= this.thispage.moderators.length; i++) {
            this.authService.getUserById(this.thispage.moderators[i]).subscribe(function (data) {
                _this.mods.push(_this.authService.setTempUser(data));
            });
        }
    };
    PaginaComponent.prototype.getOwner = function () {
        var _this = this;
        this.authService.getUserById(this.thispage.eigenaar).subscribe(function (data) {
            _this.owner = _this.authService.setTempUser(data);
        });
    };
    PaginaComponent.prototype.SetSubscribe = function () {
        var _this = this;
        if (this.authService.user.subscripties.length == 0) {
            this.authService.user.subscripties = new Array();
        }
        this.authService.user.subscripties.push(this.thispage.id);
        this.authService.saveUser(this.authService.user).subscribe(function (data) {
            _this.authService.setUser(data);
        });
        this.subscribed = true;
    };
    PaginaComponent.prototype.unsubscribe = function () {
        var _this = this;
        var toDelete = this.authService.user.subscripties.indexOf(this.thispage.id);
        if (toDelete >= 0) {
            this.authService.user.subscripties.splice(toDelete, 1);
            this.authService.saveUser(this.authService.user).subscribe(function (data) {
                _this.authService.setUser(data);
            });
        }
        this.subscribed = false;
    };
    PaginaComponent.prototype.isOwner = function () {
        return this.authService.user.id === this.owner.id;
    };
    PaginaComponent.prototype.isMod = function () {
        return this.thispage.moderators.includes(this.authService.user.id);
    };
    PaginaComponent.prototype.deletePage = function () {
        var _this = this;
        var id = new Array();
        for (var i = 0; i < this.posts.length; i++) {
            this.commentService.deletecommentsprompost(this.posts[i].id).subscribe(function (data) {
            });
        }
        this.postService.deleteAllPostsFromPage(this.thispage.id).subscribe(function (data) {
            _this.paginaService.deletePagine(_this.thispage).subscribe(function (data) {
                _this.router.navigate(['/']);
            });
        });
    };
    PaginaComponent = __decorate([
        Component({
            selector: 'app-pagina',
            templateUrl: './pagina.component.html',
            styleUrls: ['./pagina.component.css']
        }),
        __metadata("design:paramtypes", [Router, CommentService, TypeGebruikerService, DomSanitizer, ActivatedRoute, AuthService, PaginaService, PostService])
    ], PaginaComponent);
    return PaginaComponent;
}());
export { PaginaComponent };
