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
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PaginaService } from "../service/pagina.service";
import { AuthService } from "../service/auth.service";
import { Pagina } from "../model/pagina.model";
var MakePageComponent = /** @class */ (function () {
    function MakePageComponent(paginaService, router, authService) {
        this.paginaService = paginaService;
        this.router = router;
        this.authService = authService;
    }
    MakePageComponent.prototype.ngOnInit = function () {
        this.makePageForm = new FormGroup({
            naam: new FormControl(null, Validators.required),
            omschrijving: new FormControl(null, Validators.required)
        });
    };
    MakePageComponent.prototype.onSubmit = function () {
        var _this = this;
        var pagina = new Pagina(this.makePageForm.value.naam, this.makePageForm.value.omschrijving, this.authService.user.id, [this.authService.user.id]);
        this.paginaService.createPage(pagina)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/p/' + data.pagina._id);
        }, function (error) { return console.log(error); });
        this.makePageForm.reset();
    };
    MakePageComponent = __decorate([
        Component({
            selector: 'app-makePage',
            templateUrl: './makePage.component.html',
            styleUrls: ['./makePage.component.css']
        }),
        __metadata("design:paramtypes", [PaginaService, Router, AuthService])
    ], MakePageComponent);
    return MakePageComponent;
}());
export { MakePageComponent };
