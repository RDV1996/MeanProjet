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
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
    thispage: Pagina;
    posts:Post[];
    subscribed: boolean;
    ingelogd: boolean;
    owner: User;
    mods:User[];
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
                    this.getOwner();
                    this.getMods();
                    this.getPosts();
                }
            );
        });
        this.ingelogd = this.authService.isLoggedIn();
    }
    getPosts(){
        this.postService.getPostsBySub(this.thsiID, this.pagina).subscribe(data => {
            this.posts = this.postService.setSubData(data);
            this.maxpages = this.postService.subPages;
        });
    }
    isSubscribed(){
        if(this.authService.isLoggedIn()){
            return this.authService.user.subscripties.includes(this.thispage.id);
        }
    }
    getMods(){
        this.mods = new Array();
        for(let i = 0;i<= this.thispage.moderators.length;i++){
            this.authService.getUserById(this.thispage.moderators[i]).subscribe(data=>{
                this.mods.push(this.authService.setTempUser(data));
                })
        }
    }
    getOwner(){
        this.authService.getUserById(this.thispage.eigenaar).subscribe(data=> {
            this.owner = this.authService.setTempUser(data);
        });
    }
    SetSubscribe(){
        if(this.authService.user.subscripties.length == 0){
            this.authService.user.subscripties = new Array();
        }
        this.authService.user.subscripties.push(this.thispage.id);
        this.authService.saveUser(this.authService.user).subscribe(data => {
            this.authService.setUser(data);
        });
        this.subscribed = true;

    }
    unsubscribe(){
        const toDelete: number = this.authService.user.subscripties.indexOf(this.thispage.id);
        if(toDelete >= 0){
            this.authService.user.subscripties.splice(toDelete, 1);
            this.authService.saveUser(this.authService.user).subscribe(data =>  {
                this.authService.setUser(data);
            });
        }
        this.subscribed = false;
    }

    isOwner(){
        return this.authService.user.id === this.owner.id;
    }
    isMod(){
        return this.thispage.moderators.includes(this.authService.user.id)
    }
}