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
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PaginaService } from "../service/pagina.service";
import { PostService } from "../service/post.service";
var PageModsComponent = /** @class */ (function () {
    function PageModsComponent(sanitizer, route, authService, paginaService, postService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.authService = authService;
        this.paginaService = paginaService;
        this.postService = postService;
    }
    PageModsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.thsiID = params['id'];
            _this.paginaService.getPageById(_this.thsiID).subscribe(function (data) {
                _this.thispage = _this.paginaService.setPagina(data.pagina);
                _this.getOwner();
                _this.getMods();
            });
        });
        this.ingelogd = this.authService.isLoggedIn();
    };
    PageModsComponent.prototype.getMods = function () {
        var _this = this;
        this.mods = new Array();
        for (var i = 0; i <= this.thispage.moderators.length; i++) {
            this.authService.getUserById(this.thispage.moderators[i]).subscribe(function (data) {
                _this.mods.push(_this.authService.setTempUser(data));
            });
        }
    };
    PageModsComponent.prototype.getOwner = function () {
        var _this = this;
        this.authService.getUserById(this.thispage.eigenaar).subscribe(function (data) {
            _this.owner = _this.authService.setTempUser(data);
        });
    };
    PageModsComponent.prototype.isOwner = function () {
        return this.authService.user.id === this.owner.id;
    };
    PageModsComponent.prototype.isMod = function () {
        return this.thispage.moderators.includes(this.authService.user.id);
    };
    PageModsComponent.prototype.removeMod = function () {
    };
    PageModsComponent.prototype.makeMod = function () {
    };
    PageModsComponent = __decorate([
        Component({
            selector: 'app-pageMods',
            templateUrl: './pageMods.component.html',
            styleUrls: ['./pageMods.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer, ActivatedRoute, AuthService, PaginaService, PostService])
    ], PageModsComponent);
    return PageModsComponent;
}());
export { PageModsComponent };
