import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Pagina} from "../model/pagina.model";

@Injectable()
export class PaginaService {
    pagina: Pagina = new Pagina();


    constructor(private http: Http) {
    }


    getPageById(id: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/pagina/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setPagina(data){
        var pagina = new Pagina(
            data.pagina.naam, data.pagina.omschrijving, data.pagina.eigenaar, data.pagina.moderators, data.pagina._id
        );
        return pagina;
    }


    createPage(pagina: Pagina) {
        console.log(pagina);
        const body = JSON.stringify(pagina);
        console.log(body);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/pagina', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}