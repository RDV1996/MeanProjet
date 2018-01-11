import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";

@Component({
    selector: 'app-subsciption',
    template: `
        <table class="col-xs-12 table table-striped" >
            <tr *ngFor="let page of pages">
                <td>
                    <a [routerLink]="['/p', page.id]">{{page.naam}}</a>

                </td>
            </tr>
        </table>
    `,
    style: ``
})
export class SubscriptionListComponent{
    @Input() pages: Pagina[];
}