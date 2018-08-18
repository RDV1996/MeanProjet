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
var SubscriptionListComponent = /** @class */ (function () {
    function SubscriptionListComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], SubscriptionListComponent.prototype, "pages", void 0);
    SubscriptionListComponent = __decorate([
        Component({
            selector: 'app-subsciption',
            template: "\n        <table class=\"col-xs-12 table table-striped\" >\n            <tr *ngFor=\"let page of pages\">\n                <td>\n                    <a [routerLink]=\"['/p', page.id]\">{{page.naam}}</a>\n\n                </td>\n            </tr>\n        </table>\n    ",
            styles: [""]
        })
    ], SubscriptionListComponent);
    return SubscriptionListComponent;
}());
export { SubscriptionListComponent };
