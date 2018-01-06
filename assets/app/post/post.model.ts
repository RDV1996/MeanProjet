import {User} from "../auth/user.model";
import {Pagina} from "../pagina/pagina.model";

export class Post {
    id?: string;
    title: string;
    url: string;
    isVideo: boolean;
    user?: User;
    pagina?: Pagina;
    comments?: Comment[];
    likes?: string[];


    constructor(title: string, url: string, isVideo: boolean, user: User, pagina?: Pagina, comments?: Comment[], id?: string, likes?: string[]) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.isVideo = isVideo;
        this.user = user;
        this.pagina = pagina;
        this.comments = comments;
        this.likes = likes;
        if(likes==null){
            this.likes = [user.id];
        }
    }
}