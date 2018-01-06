import {User} from "../auth/user.model";

export class Pagina {
    id:string;
    naam: string;
    omschrijving: string;
    eigenaar: User;
    moderators: User[];


    constructor(naam: string, omschrijving: string, eigenaar: User, moderators: User[]) {
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.eigenaar = eigenaar;
        this.moderators = moderators;
    }
}