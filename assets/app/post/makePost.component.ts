import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PaginaService} from "../service/pagina.service";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";
import {PostService} from "../service/post.service";

@Component({
    selector: 'app-makePost',
    templateUrl: './makePost.component.html',
    styleUrls: ['./makePost.component.css']
})
export class MakePostComponent implements OnInit {

    makePostForm: FormGroup;
    paginaId;
    error = "";

    constructor(public paginaService: PaginaService, public router: Router, public authService: AuthService, public postService: PostService, public route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.paginaId = params['id'];
        });
    }

    ngOnInit() {
        this.makePostForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            url: new FormControl(null, Validators.required),
            isVideo: new FormControl(null, Validators.required)
        })
    }

    getVideoId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    isVideo(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return url.match(regExp);
    }

    isImage(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    onSubmit() {
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
            this.error = "Please fill in a YouTube.com video url or a direct image url (ends in .jpeg, .jpg, .gif, .png)"
        }

        const post = new Post(
            this.makePostForm.value.title,
            url,
            isVideo,
            this.authService.user.id,
            this.paginaId,
            [],
            "",
            [this.authService.user.id],
            new Date()
        );
        this.postService.createPost(post)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/p/post/' + data.post._id);
                },
                error => console.log(error)
            );
        this.makePostForm.reset();

    }
}