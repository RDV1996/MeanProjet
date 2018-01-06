import {User} from "../auth/user.model";
import {Post} from "../post/post.model";

export class Comment {
    id:string;
    body: string;
    lastEditedOn: Date;
    isTopComment: boolean;
    user: User;
    post: Post;
    childComments:Comment[];
    likes:string[];


    constructor(id: string, body: string, lastEditedOn: Date, isTopComment: boolean, user: User, post: Post, childComments: Comment[], likes: string[]) {
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

