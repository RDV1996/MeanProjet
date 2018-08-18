var Post = /** @class */ (function () {
    function Post(title, url, isVideo, user, pagina, comments, id, likes, madeOn) {
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
    return Post;
}());
export { Post };
