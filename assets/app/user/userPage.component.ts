import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Pagina} from "../model/pagina.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";
import {User} from "../model/user.model";

@Component({
    selector: 'app-userPage',
    templateUrl: './userpage.component.html',
    styleUrls: ['./userPage.component.css']
})
export class UserPageComponent implements OnInit {
    thisUser: User;
    ingelogd: boolean;
    thsiID;
    posts: Post[];
    maxpages=0;
    pagina =1;

    constructor(public sanitizer: DomSanitizer,public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService){}
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.thsiID = params['id'];
            this.authService.getUserById(this.thsiID).subscribe(
                data => {
                    this.thisUser = this.authService.setTempUser(data);
                    this.getPosts();
                }
            );
        });

        this.ingelogd = this.authService.isLoggedIn();

    }
    getPosts(){
        this.postService.getPostsByUser(this.thsiID, this.pagina).subscribe(
            data => {
                this.posts = this.postService.setSubData(data);
            }
        );
    }
}