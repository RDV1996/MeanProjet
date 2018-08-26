import {Component, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";
import {PostService} from "../service/post.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    posts : Post[]  = new Array();
    page = 1;
    maxpages = 0;
    pages: Pagina[]  = new Array();


    constructor(private paginaService: PaginaService, public postService: PostService) {
        this.paginaService.getPaginas().subscribe(data => {
            this.pages = this.paginaService.allPages
        });
        this.postService.getAllPosts(this.page).subscribe(data => {
            this.posts = this.postService.setAllData(data);
            this.maxpages = postService.allPages;

        })
    }

    ngOnInit() {
    }


}