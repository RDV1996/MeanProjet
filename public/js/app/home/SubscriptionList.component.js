var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { PaginaService } from "../service/pagina.service";
import { FormControl, FormGroup } from "@angular/forms";
var SubscriptionListComponent = /** @class */ (function () {
    function SubscriptionListComponent(paginaService) {
        this.paginaService = paginaService;
        this.pages = new Array();
    }
    SubscriptionListComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            pagename: new FormControl(null)
        });
    };
    SubscriptionListComponent.prototype.setPages = function () {
        var _this = this;
        if (this.myForm.value.pagename !== "") {
            this.paginaService.getPagesByName(this.myForm.value.pagename).subscribe(function (data) {
                _this.pages = _this.paginaService.transformPaginas(data);
            });
        }
    };
    SubscriptionListComponent = __decorate([
        Component({
            selector: 'app-subsciption',
            template: "\n        <div>\n        <div>\n            <form [formGroup]=\"myForm\">\n                <input id=\"pagename\" class=\"form-control\" formControlName=\"pagename\" placeholder=\"Search pages...\" (input)=\"setPages()\" autocomplete=\"off\"/>\n            </form>\n        </div>\n        <table class=\"col-xs-12 table table-striped\" >\n            <tr *ngFor=\"let page of pages\">\n                <td>\n                    <a [routerLink]=\"['/p', page.id]\">{{page.naam}}</a>\n\n                </td>\n            </tr>\n        </table>\n        </div>\n    ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [PaginaService])
    ], SubscriptionListComponent);
    return SubscriptionListComponent;
}());
export { SubscriptionListComponent };
