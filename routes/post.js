var express = require('express');
var router = express.Router();

var Post = require('../models/post');


router.get('/', function (req, res, next) {
    Post.find().exec(function(err, posts){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        if(req.query.page === null){
            return res.status(500).json({
                title: 'Give Page number',
                error: err
            });
        }
        var result = [];
        end = (req.query.page * 20)-1;
        start = end-20;
        for(i = start; i <= end; i++) {
                result.push(post[i]);
        }
        res.status(200).json(result);
    })
});

module.exports = router;
