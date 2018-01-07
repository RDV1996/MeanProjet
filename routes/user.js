var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        email: req.body.email,
        wachtwoord:  bcrypt.hashSync(req.body.wachtwoord,10),
        username: req.body.username
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user){
            return res.status(401).json({
                title: 'Login mislukt',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.wachtwoord, user.wachtwoord)){
            return res.status(401).json({
                title: 'Login mislukt',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret',{expiresIn:7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            user: user
        })
    });
});

router.get('/:id', function (req, res, next) {
    User.findById(req.params.id, function(err, user){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        var token = jwt.sign({user: user}, 'secret',{expiresIn:7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            user: user
        })
    });
});

router.put('/:id', function(req, res, next){
    User.findOneAndUpdate({_id:req.params.id}, req.body, function (err, user) {
        user.about = "";
        res.send(user);
    });
});

module.exports = router;
