import {User} from "../model/user.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
//om .map en andere operators mogelijk te maken
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Comment} from "../model/comment.model";

@Injectable()
export class CommentService {
    constructor(private http: Http) {
    }

    setComment(data) {
        var comment = new Comment(
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


    createComment(comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://postsite.herokuapp.com/comment', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getComments(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/comment?post=' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getComment(id){
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.get('https://postsite.herokuapp.com/comment/' + id, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    setComments(data){
        var comments = Array();
        for(var i =0; i< data.comment.length; i++){
            comments.push(this.setComment(data.comment[i]));
        }
        return comments;
    }

    saveComment(comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('https://postsite.herokuapp.com/comment/' + comment.id, body, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    deleteComment(comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete('https://postsite.herokuapp.com/comment/' + comment.id, {headers: headers})
            .map((response: Response) =>
                response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}