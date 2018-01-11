import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Post} from "../model/post.model";

@Injectable()
export class PostService {
    subPages: number;
    allPages: number;

    constructor(private http: Http) {
    }

    getAllPosts(page) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/post?page=' + page, {headers: headers})
            .map((response: Response) =>
                response.json()
            )
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setAllData(data) {
        this.allPages = data.pages;
        var posts = [];
        for (var i = 0; i < data.result.length; i++) {
            posts.push(this.setOnePost(data.result[i]));
        }
        return posts;
    }

    setSubData(data) {
        this.subPages = data.pages;
        var posts = [];
        for (var i = 0; i < data.result.length; i++) {
            posts.push(this.setOnePost(data.result[i]));
        }
        return posts;

    }

    setOnePost(data) {
        var post = new Post(
            data.title,
            data.url,
            data.isVideo,
            data.user,
            data.pagina,
            data.comments,
            data._id,
            data.likes,
            data.madeOn
        );
        return post;
    }

    getPostsBySub(id, page) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/post?sub=' + id + '&page=' + page, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getPostById(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/post/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    createPost(post: Post) {
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

    savePost(post: Post) {
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:3000/post/like/' + post.id, body, {headers: headers})
            .map((response: Response) => {
                    response.json();
                }
            )
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    deletePost(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.delete('http://localhost:3000/post/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

}