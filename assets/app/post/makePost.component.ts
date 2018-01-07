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
export class MakePostComponent implements OnInit{

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

    onSubmit() {
        if()

        const post = new Post(
            this.makePostForm.value.title,
            this.makePostForm.value.url,
            this.makePostForm.value.isVideo,
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
                    this.router.navigateByUrl('/p/' + data.obj._id);
                },
                error => console.log(error)
            );
        this.makePostForm.reset();
    }
}