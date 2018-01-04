export class User {
    id?:string;
    email: string;
    wachtwoord: string;
    username?: string;
    about?: string;
    typeGebruiker?: string;
    posts?: string[];
    subscripties?: string[];
    comments?: string[];


    constructor(email?: string, wachtwoord?: string, username?: string, about?: string, typeGebruiker?: string, posts?: string[], subscripties?: string[], comments?: string[]) {
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


