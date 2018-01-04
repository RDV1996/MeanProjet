import {Component} from '@angular/core';
import {Post} from "./post.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-postList',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.css']
})
export class PostListComponent {
    constructor(public sanitizer: DomSanitizer){}
    posts = [
        new Post("HAlleloujah!", "https://i.imgur.com/WrQiw0w.jpg", false, "aaa", "eee",["kkk"], "mmm"),
        new Post("PUBG!!!!", "FaYhGMoacoE", true, "aaa", "eee",["kkk"], "mmm", ["lll","bbb"])
    ];
}