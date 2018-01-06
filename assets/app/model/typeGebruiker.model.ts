export class typeGebruiker {
    id:string;
    typeNaaam:string;
    omschrijving:string;


    constructor(id: string, tyeNaaam: string, omschrijving: string) {
        this.id = id;
        this.typeNaaam = tyeNaaam;
        this.omschrijving = omschrijving;
    }
}