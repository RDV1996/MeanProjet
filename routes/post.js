var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.post('/', function (req, res, next) {
    var post = new Post({
        title: req.body.title,
        url: req.body.url,
        isVideo: req.body.isVideo,
        user: req.body.user,
        pagina: req.body.pagina,
        comments: [],
        likes: req.body.likes,
        madeOn: req.body.madeOn
    });
    post.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'post created',
            post: result
        });
    });
});

router.get('/', function (req, res, next) {
    console.log(req.query.title);
    //By title
    if (req.query.title) {
        Post.find({
            title : new RegExp(req.query.title.replace(/\s+/g, "\\s+"), "i")
        },function(err, posts){
            if (err){
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            posts.sort(function(a, b){
                var keyA = new Date(a.madeOn),
                    keyB = new Date(b.madeOn);
                // Compare the 2 dates
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            var result = [];
            var end;
            var start;
            var temp = [];
            var page = req.query.page;
            temp = posts;
            var pages = Math.floor(temp.length / 20) + 1;
            if (req.query.page == null || pages < page || page < 0) {
                page = 1;
            }


            if (temp.length > 20) {
                end = (page * 20) - 1;
                start = end - 20;
            }
            else {
                end = temp.length - 1;
                start = 0;
            }

            for (var i = start; i <= end; i++) {
                result.push(temp[i]);
            }


            res.status(200).json({
                result: result,
                page: page,
                pages: pages
            });
        });
    }
    //By sub
    else if (req.query.sub) {
        Post.find({
            pagina : req.query.sub
        },function(err, posts){
            if (err){
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            posts.sort(function(a, b){
                var keyA = new Date(a.madeOn),
                    keyB = new Date(b.madeOn);
                // Compare the 2 dates
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            var result = [];
            var end;
            var start;
            var temp = [];
            var page = req.query.page;
            temp = posts;
            var pages = Math.floor(temp.length / 20) + 1;
            if (req.query.page == null || pages < page || page < 0) {
                page = 1;
            }
            if (temp.length > 20) {
                end = (page * 20) - 1;
                start = end - 20;
            }
            else {
                end = temp.length - 1;
                start = 0;
            }

            for (var i = start; i <= end; i++) {
                result.push(temp[i]);
            }


            res.status(200).json({
                result: result,
                page: page,
                pages: pages
            });
        });
    }
    //By user
    else if (req.query.user) {
        Post.find({
            user : req.query.user
        },function(err, posts){
            if (err){
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            posts.sort(function(a, b){
                var keyA = new Date(a.madeOn),
                    keyB = new Date(b.madeOn);
                // Compare the 2 dates
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            var result = [];
            var end;
            var start;
            var temp = [];
            var page = req.query.page;
            temp = posts;
            var pages = Math.floor(temp.length / 20) + 1;
            if (req.query.page == null || pages < page || page < 0) {
                page = 1;
            }


            if (temp.length > 20) {
                end = (page * 20) - 1;
                start = end - 20;
            }
            else {
                end = temp.length - 1;
                start = 0;
            }

            for (var i = start; i <= end; i++) {
                result.push(temp[i]);
            }


            res.status(200).json({
                result: result,
                page: page,
                pages: pages
            });
        });
    }
    else{
        Post.find(function(err, posts){
            if (err){
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            posts.sort(function(a, b){
                var keyA = new Date(a.madeOn),
                    keyB = new Date(b.madeOn);
                // Compare the 2 dates
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
                return 0;
            });
            var result = [];
            var end;
            var start;
            var temp = [];
            var page = req.query.page;
            temp = posts;
            var pages = Math.floor(temp.length / 20) + 1;
            if (req.query.page == null || pages < page || page < 0) {
                page = 1;
            }


            if (temp.length > 20) {
                end = (page * 20) - 1;
                start = end - 20;
            }
            else {
                end = temp.length - 1;
                start = 0;
            }

            for (var i = start; i <= end; i++) {
                result.push(temp[i]);
            }


            res.status(200).json({
                result: result,
                page: page,
                pages: pages
            });
        });
    }


});

router.get('/:id', function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(post);
    })
});

router.put('/like/:id', function(req, res, next){
    Post.findOneAndUpdate({_id:req.params.id}, req.body, function (err, post) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.send(post);
    });
});

router.delete('/:id', function(req, res, next){
    Post.remove({_id:req.params.id}, function (err, post) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.send({
            message: "Done!"
        });
    });
});

router.delete('/pagina/:id', function(req, res, next){
    Post.remove({pagina:req.params.id}, function (err, post) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.send({
            message: "Done!"
        });
    });
});

module.exports = router;
