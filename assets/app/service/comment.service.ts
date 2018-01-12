import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {CommentModel} from "../model/comment.model";

@Injectable()
export class CommentService {
    constructor(private http: Http) {
    }

    setComment(data) {
        var comment = new CommentModel(
            data._id,
            data.body,
            data.lastEditedOn,
            data.isTopComment,
            data.user,
            data.post,
            data.childComments,
            data.likes
        );
        return comment;
    }


    createComment(comment: CommentModel) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/comment', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getComments(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/comment/?post=' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getComment(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('http://localhost:3000/comment/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setComments(data){
        var comments = Array();
        for(var i =0; i< data.length; i++){
            comments.push(this.setComment(data[i]));
        }
        return comments;
    }

    saveComment(comment: CommentModel) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:3000/comment/' + comment.id, body, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    deleteComment(comment: CommentModel) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete('http://localhost:3000/comment/' + comment.id, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}