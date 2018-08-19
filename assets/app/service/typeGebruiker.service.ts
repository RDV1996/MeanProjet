import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TypeGebruikerService{
    constructor(private http: Http) {
    }

    getTypeById(id: string) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/type/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}