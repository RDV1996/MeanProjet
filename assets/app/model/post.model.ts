import {User} from "./user.model";
import {Pagina} from "./pagina.model";

export class Post {
    id?: string;
    title: string;
    url: string;
    isVideo: boolean;
    user?: string;
    pagina?: string;
    comments?: string[];
    likes?: string[];
    madeOn: Date;


    constructor(title?: string, url?: string, isVideo?: boolean, user?: string, pagina?: string, comments?: string[], id?: string, likes?: string[], madeOn?:Date) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.isVideo = isVideo;
        this.user = user;
        this.pagina = pagina;
        this.comments = comments;
        this.likes = likes;
        this.madeOn = madeOn;
    }
}