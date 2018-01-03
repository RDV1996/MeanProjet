import {Component} from '@angular/core';
import {Post} from "./post.model";

@Component({
    selector: 'app-postList',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.css']
})
export class PostListComponent {
    posts = [
        new Post("HAlleloujah!", "https://i.imgur.com/WrQiw0w.jpg", false),
        new Post("PUBG!!!!", "https://www.youtube.com/embed/FaYhGMoacoE", true)
    ];
}