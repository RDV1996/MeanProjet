import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Post} from "../model/post.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Pagina} from "../model/pagina.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {PaginaService} from "../service/pagina.service";
import {PostService} from "../service/post.service";
import {User} from "../model/user.model";
import {FormControl, FormGroup} from "@angular/forms";

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
    myForm: FormGroup;

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
        this.myForm = new FormGroup({
            username: new FormControl(null)
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

    isOwner(user){
        return this.thispage.eigenaar === user.id;
    }
    setUsers(){
        if(this.myForm.value.username !== ""){
            this.authService.getByName(this.myForm.value.username).subscribe(data => {
                this.users = this.authService.setUsers(data);
            })
        }
    }
    isMod(user){
        return this.thispage.moderators.includes(user.id)
    }
    removeMod(user){
        this.thispage.moderators.splice(this.thispage.moderators.indexOf(user.id),1);
        this.paginaService.savePage(this.thispage).subscribe(data => {
            for(let i =0; i<= this.mods.length; i++){
                if(this.mods[i].id == user.id){
                    this.mods.splice(i,1);
                }
            }
        })
    }
    makeMod(user) {
        this.thispage.moderators.push(user.id);
        this.paginaService.savePage(this.thispage).subscribe(data => {

            this.mods.push(user);

        })
    }
}