var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Post = require('../models/post');


router.get('/', function (req, res, next) {
    Post.find(function(err, posts){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            posts:posts
        })
    });
});

module.exports = router;
