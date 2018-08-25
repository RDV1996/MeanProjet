import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Pagina} from "../model/pagina.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user.model";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    thispage: Pagina;
    posts:Post[];
    maxpages=0;
    pagina =1;
    myForm: FormGroup;

    constructor(public sanitizer: DomSanitizer,public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService){}
    ngOnInit() {
        this.myForm = new FormGroup({
            search: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {

        this.postService.getPostsByName(this.myForm.value.search, this.pagina).subscribe(data => {
            this.posts = this.postService.setSubData(data);
            this.maxpages = this.postService.subPages;
        });

    }
}