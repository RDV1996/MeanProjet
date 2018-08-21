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
    selector: 'app-pageMods',
    templateUrl: './pageMods.component.html',
    styleUrls: ['./pageMods.component.css']
})
export class PageModsComponent implements OnInit {
    thispage: Pagina;
    ingelogd: boolean;
    owner: User;
    mods:User[];
    thsiID;
    users:User[];

    constructor(public sanitizer: DomSanitizer,public route: ActivatedRoute, public authService: AuthService, public paginaService: PaginaService, public postService: PostService){}
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.thsiID = params['id'];
            this.paginaService.getPageById(this.thsiID).subscribe(
                data => {
                    this.thispage = this.paginaService.setPagina(data.pagina);
                    this.getOwner();
                    this.getMods();
                }
            );
        });

        this.ingelogd = this.authService.isLoggedIn();
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

    isOwner(){
        return this.authService.user.id === this.owner.id;
    }
    isMod(){
        return this.thispage.moderators.includes(this.authService.user.id)
    }
    removeMod(){

    }
    makeMod(){

    }
}