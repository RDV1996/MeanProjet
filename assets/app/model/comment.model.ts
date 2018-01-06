import {User} from "./user.model";
import {Post} from "./post.model";

export class Comment {
    id:string;
    body: string;
    lastEditedOn: Date;
    isTopComment: boolean;
    user: string;
    post: string;
    childComments:string[];
    likes:string[];


    constructor(id: string, body: string, lastEditedOn: Date, isTopComment: boolean, user: string, post: string, childComments: string[], likes: string[]) {
        this.id = id;
        this.body = body;
        this.lastEditedOn = lastEditedOn;
        this.isTopComment = isTopComment;
        this.user = user;
        this.post = post;
        this.childComments = childComments;
        this.likes = likes;
    }
}

