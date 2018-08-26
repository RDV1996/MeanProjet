var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PaginaService } from "../service/pagina.service";
import { AuthService } from "../service/auth.service";
import { Post } from "../model/post.model";
import { PostService } from "../service/post.service";
var MakePostComponent = /** @class */ (function () {
    function MakePostComponent(paginaService, router, authService, postService, route) {
        var _this = this;
        this.paginaService = paginaService;
        this.router = router;
        this.authService = authService;
        this.postService = postService;
        this.route = route;
        this.paginaId = "";
        this.error = "";
        this.route.params.subscribe(function (params) {
            _this.paginaId = params['id'];
        });
    }
    MakePostComponent.prototype.ngOnInit = function () {
        this.makePostForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            url: new FormControl(null, Validators.required)
        });
    };
    MakePostComponent.prototype.getVideoId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return 'error';
        }
    };
    MakePostComponent.prototype.isVideo = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return url.match(regExp);
    };
    MakePostComponent.prototype.isImage = function (url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    };
    MakePostComponent.prototype.onSubmit = function () {
        var _this = this;
        var url;
        var isVideo;
        if (this.isVideo(this.makePostForm.value.url)) {
            url = this.getVideoId(this.makePostForm.value.url);
            isVideo = true;
            this.error = "";
        }
        else if (this.isImage(this.makePostForm.value.url)) {
            url = this.makePostForm.value.url;
            isVideo = false;
            this.error = "";
        }
        else {
            this.error = "Please fill in a YouTube.com video url or a direct image url (ends in .jpeg, .jpg, .gif, .png)";
        }
        var post = new Post(this.makePostForm.value.title, url, isVideo, this.authService.user.id, this.paginaId, [], "", [this.authService.user.id], new Date());
        this.postService.createPost(post)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/p/post/' + data.post._id);
        }, function (error) { return console.log(error); });
        this.makePostForm.reset();
    };
    MakePostComponent = __decorate([
        Component({
            selector: 'app-makePost',
            templateUrl: './makePost.component.html',
            styleUrls: ['./makePost.component.css']
        }),
        __metadata("design:paramtypes", [PaginaService, Router, AuthService, PostService, ActivatedRoute])
    ], MakePostComponent);
    return MakePostComponent;
}());
export { MakePostComponent };
