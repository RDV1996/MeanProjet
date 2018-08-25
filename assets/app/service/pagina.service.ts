import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Pagina} from "../model/pagina.model";

@Injectable()
export class PaginaService {
    pagina: Pagina = new Pagina();
    allPages: Pagina[];


    constructor(private http: Http) {
        this.allPages = new Array();
    }

    getPaginas() {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/pagina', {headers: headers})
            .map((response: Response) => {
                this.allPages = this.transformPaginas(response.json());
                return this.allPages;
            })
            .catch((error: Response) => {
                console.log(error);
                return Observable.throw(error.json)
            });
    }

    transformPaginas(data){
        const paginas = data.pagina;
        let transformedPaginas: Pagina[] = [];
        for (let pagina of paginas) {
            transformedPaginas.push(this.setPagina(pagina));
        }
        return transformedPaginas;
    }


    getPageById(id: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/pagina/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                console.log(error);
                return Observable.throw(error.json)
            });
    }

    setPagina(pagina) {
        return new Pagina(
            pagina.naam, pagina.omschrijving, pagina.eigenaar, pagina.moderators, pagina._id
        );
    }


    createPage(pagina: Pagina) {
        const body = JSON.stringify(pagina);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://postsite.herokuapp.com/pagina', body, {headers: headers})
            .map((response: Response) => {
                response.json();
        })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getName(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/pagina?name=' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getPagesByName(name: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/pagina/byname/' + name, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                console.log(error);
                return Observable.throw(error.json)
            });
    }
}