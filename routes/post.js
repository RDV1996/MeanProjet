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
            likes: req.body.comments,
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
    Post.find().exec(function (err, posts) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        if (req.query.page === null) {
            return res.status(500).json({
                title: 'Give Page number',
                error: err
            });
        }
        var result = [];
        var end;
        var start;
        if (posts.length > 20) {
            end = (req.query.page * 20) - 1;
            start = end - 20;
        }
        else {
            end = posts.length - 1;
            start = 0;
        }

        for (i = start; i <= end; i++) {
            result.push(posts[i]);
        }
        res.status(200).json(result);
    })
});

router.get('/:id', function (req, res, next) {
    Post.findById(req.params.id, function (err, posts) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        if (!req.query.page) {
            return res.status(500).json({
                title: 'Give Page number',
                error: err
            });
        }
        var result = [];
        var end;
        var start;
        if (posts.length > 20) {
            end = (req.query.page * 20) - 1;
            start = end - 20;
        }
        else {
            end = posts.length - 1;
            start = 0;
        }

        for (i = start; i <= end; i++) {
            result.push(posts[i]);
        }
        res.status(200).json(result);
    })
});


module.exports = router;
