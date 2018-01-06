import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService{
    constructor(private http:Http){
    }
    getAllPosts(){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/getpost/', {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


}