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
import { FormControl, FormGroup, Validators } from "@angular/forms";
var SearchComponent = /** @class */ (function () {
    function SearchComponent(sanitizer, route, authService, paginaService, postService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.authService = authService;
        this.paginaService = paginaService;
        this.postService = postService;
        this.maxpages = 0;
        this.pagina = 1;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            search: new FormControl(null, Validators.required)
        });
    };
    SearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.postService.getPostsByName(this.myForm.value.search, this.pagina).subscribe(function (data) {
            _this.posts = _this.postService.setSubData(data);
            _this.maxpages = _this.postService.subPages;
        });
    };
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer, ActivatedRoute, AuthService, PaginaService, PostService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
