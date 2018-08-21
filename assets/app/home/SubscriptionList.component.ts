import {Component, Input, OnInit} from "@angular/core";
import {PaginaService} from "../service/pagina.service";
import {Pagina} from "../model/pagina.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-subsciption',
    template: `
        <div>
        <div>
            <form [formGroup]="myForm">
                <input id="pagename" class="form-control" formControlName="pagename" (change)="setPages()"/>
            </form>
        </div>
        <table class="col-xs-12 table table-striped" >
            <tr *ngFor="let page of pages">
                <td>
                    <a [routerLink]="['/p', page.id]">{{page.naam}}</a>

                </td>
            </tr>
        </table>
        </div>
    `,
    styles: [``]
})
export class SubscriptionListComponent implements OnInit{
    myForm: FormGroup;
    pages: Pagina[];
    constructor(private paginaService: PaginaService){

    }
    ngOnInit(){
        this.myForm = new FormGroup({
            pagename: new FormControl(null)
        });
    }

    setPages(){
        this.paginaService.getPagesByName(this.myForm.value.pageName).subscribe(data => {
            this.pages = this.paginaService.transformPaginas(data);
        });
    }


}