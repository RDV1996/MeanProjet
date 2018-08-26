var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Pagina } from "../model/pagina.model";
var PaginaService = /** @class */ (function () {
    function PaginaService(http) {
        this.http = http;
        this.pagina = new Pagina();
        this.allPages = new Array();
    }
    PaginaService.prototype.getPaginas = function () {
        var _this = this;
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/pagina', { headers: headers })
            .map(function (response) {
            _this.allPages = _this.transformPaginas(response.json());
            return _this.allPages;
        })
            .catch(function (error) {
            console.log(error);
            return Observable.throw(error.json);
        });
    };
    PaginaService.prototype.transformPaginas = function (data) {
        var paginas = data.pagina;
        var transformedPaginas = [];
        for (var _i = 0, paginas_1 = paginas; _i < paginas_1.length; _i++) {
            var pagina = paginas_1[_i];
            transformedPaginas.push(this.setPagina(pagina));
        }
        return transformedPaginas;
    };
    PaginaService.prototype.getPageById = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/pagina/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable.throw(error.json);
        });
    };
    PaginaService.prototype.setPagina = function (pagina) {
        return new Pagina(pagina.naam, pagina.omschrijving, pagina.eigenaar, pagina.moderators, pagina._id);
    };
    PaginaService.prototype.createPage = function (pagina) {
        var body = JSON.stringify(pagina);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('https://postsite.herokuapp.com/pagina', body, { headers: headers })
            .map(function (response) {
            response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PaginaService.prototype.getName = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/pagina/naam/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PaginaService.prototype.getPagesByName = function (name) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/pagina?name=' + name, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable.throw(error.json);
        });
    };
    PaginaService.prototype.savePage = function (page) {
        var body = JSON.stringify(page);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('https://postsite.herokuapp.com/pagina/' + page.id, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PaginaService.prototype.deletePagine = function (page) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete('https://postsite.herokuapp.com/pagina/' + page.id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PaginaService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PaginaService);
    return PaginaService;
}());
export { PaginaService };
