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
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { PaginaService } from "../service/pagina.service";
import { PostService } from "../service/post.service";
import { User } from "../model/user.model";
import { FormControl, FormGroup } from "@angular/forms";
var PageModsComponent = /** @class */ (function () {
    function PageModsComponent(sanitizer, route, authService, paginaService, postService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.authService = authService;
        this.paginaService = paginaService;
        this.postService = postService;
        this.thispage = new Pagina("", "", "", [], "");
        this.ingelogd = false;
        this.owner = new User("", "", "", "", "", [], [], []);
        this.mods = new Array();
        this.thsiID = "";
        this.users = new Array();
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
        this.myForm = new FormGroup({
            username: new FormControl(null)
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
    PageModsComponent.prototype.isOwner = function (user) {
        return this.thispage.eigenaar === user.id;
    };
    PageModsComponent.prototype.setUsers = function () {
        var _this = this;
        if (this.myForm.value.username !== "") {
            this.authService.getByName(this.myForm.value.username).subscribe(function (data) {
                _this.users = _this.authService.setUsers(data);
            });
        }
    };
    PageModsComponent.prototype.isMod = function (user) {
        return this.thispage.moderators.includes(user.id);
    };
    PageModsComponent.prototype.removeMod = function (user) {
        var _this = this;
        this.thispage.moderators.splice(this.thispage.moderators.indexOf(user.id), 1);
        this.paginaService.savePage(this.thispage).subscribe(function (data) {
            for (var i = 0; i <= _this.mods.length; i++) {
                if (_this.mods[i].id == user.id) {
                    _this.mods.splice(i, 1);
                }
            }
        });
    };
    PageModsComponent.prototype.makeMod = function (user) {
        var _this = this;
        this.thispage.moderators.push(user.id);
        this.paginaService.savePage(this.thispage).subscribe(function (data) {
            _this.mods.push(user);
        });
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
