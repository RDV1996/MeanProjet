export class Pagina {
    naam: string;
    omschrijving: string;
    eigenaar: string;
    moderators: string;


    constructor(naam: string, omschrijving: string, eigenaar: string, moderators: string) {
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.eigenaar = eigenaar;
        this.moderators = moderators;
    }
}