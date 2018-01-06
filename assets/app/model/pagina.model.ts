import {User} from "./user.model";

export class Pagina {
    id:string;
    naam: string;
    omschrijving: string;
    eigenaar: string;
    moderators: string[];


    constructor(naam?: string, omschrijving?: string, eigenaar?: string, moderators?: string[], id?:string) {
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.eigenaar = eigenaar;
        this.moderators = moderators;
        this.id = id;
    }
}