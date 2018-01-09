import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";

@Component({
    selector: 'app-subsciption',
    template: `
        <div class="row" *ngFor="let page of pages">
            <a [routerLink]="['/p', page.id]">{{page.naam}}</a>
        </div>
    `,
    style: ``
})
export class SubscriptionListComponent{
    @Input() pages: Pagina[];
}