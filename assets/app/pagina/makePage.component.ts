import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaginaService} from "../service/pagina.service";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";

@Component({
    selector: 'app-makePage',
    templateUrl: './makePage.component.html',
    styleUrls: ['./makePage.component.css']
})
export class MakePageComponent implements OnInit {

    makePageForm: FormGroup;

    constructor(public paginaService: PaginaService, public router: Router, public authService: AuthService) {
    }

    ngOnInit() {
        this.makePageForm = new FormGroup({
            naam: new FormControl(null, Validators.required),
            omschrijving: new FormControl(null, Validators.required)
        })
    }

    onSubmit() {

        const pagina = new Pagina(
            this.makePageForm.value.naam,
            this.makePageForm.value.omschrijving,
            this.authService.user.id,
            [this.authService.user.id]
        );
        this.paginaService.createPage(pagina)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/p/' + data.obj._id);
                },
                error => console.log(error)
            );
        this.makePageForm.reset();
    }
}