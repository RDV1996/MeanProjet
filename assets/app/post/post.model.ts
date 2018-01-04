export class Post {
    id?: string;
    title: string;
    url: string;
    isVideo: boolean;
    userId?: string;
    paginaId?: string;
    comments?: string[];
    likes?: string[];


    constructor(title: string, url: string, isVideo: boolean, userId: string, paginaId?: string, comments?: string[], id?: string, likes?: string[]) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.isVideo = isVideo;
        this.userId = userId;
        this.paginaId = paginaId;
        this.comments = comments;
        this.likes = likes;
        if(likes==null){
            this.likes = [userId];
        }
    }
}