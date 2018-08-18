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
import { Post } from "../model/post.model";
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getAllPosts = function (page) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('http://localhost:3000/post?page=' + page, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService.prototype.setAllData = function (data) {
        this.allPages = data.pages;
        var posts = [];
        for (var i = 0; i < data.result.length; i++) {
            posts.push(this.setOnePost(data.result[i]));
        }
        return posts;
    };
    PostService.prototype.setSubData = function (data) {
        this.subPages = data.pages;
        var posts = [];
        for (var i = 0; i < data.result.length; i++) {
            posts.push(this.setOnePost(data.result[i]));
        }
        return posts;
    };
    PostService.prototype.setOnePost = function (data) {
        var post = new Post(data.title, data.url, data.isVideo, data.user, data.pagina, data.comments, data._id, data.likes, data.madeOn);
        return post;
    };
    PostService.prototype.getPostsBySub = function (id, page) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('http://localhost:3000/post?sub=' + id + '&page=' + page, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService.prototype.getPostById = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get('http://localhost:3000/post/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService.prototype.createPost = function (post) {
        console.log(post);
        var body = JSON.stringify(post);
        console.log(body);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('http://localhost:3000/post', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService.prototype.savePost = function (post) {
        var body = JSON.stringify(post);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:3000/post/like/' + post.id, body, { headers: headers })
            .map(function (response) {
            response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService.prototype.deletePost = function (id) {
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.delete('http://localhost:3000/post/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    PostService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PostService);
    return PostService;
}());
export { PostService };
