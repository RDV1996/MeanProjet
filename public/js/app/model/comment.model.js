var Comment = /** @class */ (function () {
    function Comment(id, body, lastEditedOn, isTopComment, user, post, childComments, likes) {
        this.id = id;
        this.body = body;
        this.lastEditedOn = lastEditedOn;
        this.isTopComment = isTopComment;
        this.user = user;
        this.post = post;
        this.childComments = childComments;
        this.likes = likes;
    }
    return Comment;
}());
export { Comment };
