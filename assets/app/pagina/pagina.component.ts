import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Pagina} from "../model/pagina.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit{
    thispage: Pagina;
    posts:Post[];
    subscribed: boolean;
    ingelogd: boolean;
    owner:boolean;
    thsiID;
    maxpages=0;
    pagina =1;
    constructor(public sanitizer: DomSanitizer,public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService){}
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.thsiID = params['id'];
            this.paginaService.getPageById(this.thsiID).subscribe(
                data => {
                    this.thispage = this.paginaService.setPagina(data.pagina);
                    this.subscribed = this.isSubscribed();
                    this.owner =this.isOwner();
                }
            );
        });
        this.ingelogd = this.authService.isLoggedIn();
        this.postService.getPostsBySub(this.thsiID, this.pagina).subscribe(data => {
            this.posts = this.postService.setSubData(data);
            this.maxpages = this.postService.subPages;
        })
    }
    isSubscribed(){
        return this.authService.user.subscripties.includes(this.thispage.id);

    }
    SetSubscribe(){
        if(this.authService.user.subscripties.length == 0){
            this.authService.user.subscripties = new Array();
        }
        this.authService.user.subscripties.push(this.thispage.id);
        console.log(this.authService.user);
        this.authService.saveUser(this.authService.user).subscribe(data => {
            this.authService.user = this.authService.setUser(data);
        });
        this.subscribed = true;
    }
    unsubscribe(){
        let toDelete = this.authService.user.subscripties.indexOf(this.thispage.id);
        if(toDelete >= 0){
            this.authService.user.subscripties.splice(toDelete, 1);
            this.authService.saveUser(this.authService.user);
        }
        this.subscribed = false;
    }

    isOwner(){
        return this.authService.user.id === this.thispage.eigenaar;
    }
}