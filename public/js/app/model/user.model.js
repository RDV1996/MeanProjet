var User = /** @class */ (function () {
    function User(email, wachtwoord, username, about, typeGebruiker, posts, subscripties, comments) {
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.username = username;
        this.about = about;
        this.typeGebruiker = typeGebruiker;
        this.posts = posts;
        this.subscripties = subscripties;
        this.comments = comments;
    }
    return User;
}());
export { User };
