import {Post} from "../post/post.model";
import {Pagina} from "../pagina/pagina.model";
import {Comment} from "../comment/comment.model";
import {typeGebruiker} from "./typeGebruiker.model";


export class User {
    id?:string;
    email: string;
    wachtwoord: string;
    username?: string;
    about?: string;
    typeGebruiker?: typeGebruiker;
    posts?: Post[];
    subscripties?: Pagina[];
    comments?: Comment[];


    constructor(email?: string, wachtwoord?: string, username?: string, about?: string, typeGebruiker?: typeGebruiker, posts?: Post[], subscripties?: Pagina[], comments?: Comment[]) {
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.username = username;
        this.about = about;
        this.typeGebruiker = typeGebruiker;
        this.posts = posts;
        this.subscripties = subscripties;
        this.comments = comments;
    }
}


