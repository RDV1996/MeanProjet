var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');

router.post('/', function (req, res, next) {
    var comment = new Comment({
        body: req.body.body,
        lastEditedOn: req.body.lastEditedOn,
        isTopComment: req.body.isTopComment,
        user: req.body.user,
        post: req.body.post,
        childComments: req.body.childComments,
        likes: req.body.likes
    });
    comment.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json(result);
    });
});

router.get('/', function (req, res, next) {
    if(req.query.post) {
        Comment.find({
            post: req.query.post
        }, function (err, comment) {
            if (err) {
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            res.status(200).json({
                comment: comment
            })
        });
    }
    else{
        Comment.find(function (err, comment) {
            if (err) {
                return res.status(500).json({
                    title: 'Er heeft zich een fout voorgedaan',
                    error: err
                });
            }
            res.status(200).json({
                comment: comment
            })
        });
    }
});

router.get('/:id', function (req, res, next) {
    Comment.findById(req.params.id, function (err, comment) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(comment);
    })
});


router.patch('/:id', function (req, res, next) {
    Comment.findOneAndUpdate({_id: req.params.id}, req.body, function (err, comment) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.send(comment);
    });
});

router.delete('/:id', function (req, res, next) {
    Comment.remove({_id: req.params.id}, function (err, post) {
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