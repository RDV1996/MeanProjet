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
var TopCommentsComponent = /** @class */ (function () {
    function TopCommentsComponent() {
    }
    TopCommentsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TopCommentsComponent.prototype, "comments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Post)
    ], TopCommentsComponent.prototype, "post", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Pagina)
    ], TopCommentsComponent.prototype, "pagina", void 0);
    TopCommentsComponent = __decorate([
        Component({
            selector: 'app-topComments',
            template: "\n        <div *ngFor=\"let comment of comments\">\n            <app-comment [thiscomment]=\"comment\" [post]=\"post\" *ngIf=\"comment.isTopComment\" [comments]=\"comments\" [topcomment]=\"true\" [page]=\"pagina\"></app-comment>\n        </div>\n    ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], TopCommentsComponent);
    return TopCommentsComponent;
}());
export { TopCommentsComponent };
