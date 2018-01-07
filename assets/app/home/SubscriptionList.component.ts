import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaginaService} from "../service/pagina.service";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";

@Component({
    selector: 'app-subsciption',
    template: `
        <div class="row" *ngFor="let page of pages">
            <a [routerLink]="['/p', page.id]">{{page.naam}}</a>
        </div>
    `,
    style: ``
})
export class SubscriptionListComponent implements OnInit {
    pages: Pagina[];

    constructor(private paginaService: PaginaService) {
        this.paginaService.getPaginas().subscribe(data => this.pages = this.paginaService.allPages);

    }
    ngOnInit(){
        this.pages = this.paginaService.allPages;
        console.log(this.pages);
    }
}