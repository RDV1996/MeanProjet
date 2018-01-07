import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Post} from "../model/post.model";

@Injectable()
export class PostService{
    constructor(private http:Http){
    }
    getAllPosts(){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/post/', {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getPostsBySubs(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/post/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    createPost(post:Post){
        console.log(post);
        const body = JSON.stringify(post);
        console.log(body);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/post', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }






}