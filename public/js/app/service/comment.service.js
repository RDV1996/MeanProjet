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
import { Comment } from "../model/comment.model";
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.setComment = function (data) {
        var comment = new Comment(data._id, data.body, data.lastEditedOn, data.isTopComment, data.user, data.post, data.childComments, data.likes);
        return comment;
    };
    CommentService.prototype.createComment = function (comment) {
        var body = JSON.stringify(comment);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('https://postsite.herokuapp.com/comment', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.getComments = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/comment?post=' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.getComment = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('https://postsite.herokuapp.com/comment/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.setComments = function (data) {
        var comments = Array();
        for (var i = 0; i < data.comment.length; i++) {
            comments.push(this.setComment(data.comment[i]));
        }
        return comments;
    };
    CommentService.prototype.saveComment = function (comment) {
        var body = JSON.stringify(comment);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('https://postsite.herokuapp.com/comment/' + comment.id, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.deleteComment = function (comment) {
        var body = JSON.stringify(comment);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete('https://postsite.herokuapp.com/comment/' + comment.id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.deletecommentsprompost = function (id) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete('https://postsite.herokuapp.com/comment/page/' + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    CommentService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], CommentService);
    return CommentService;
}());
export { CommentService };
