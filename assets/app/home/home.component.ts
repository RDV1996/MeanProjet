import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaginaService} from "../service/pagina.service";
import {AuthService} from "../service/auth.service";
import {Pagina} from "../model/pagina.model";
import {Post} from "../model/post.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    posts:Post;

}