var express = require('express');
var router = express.Router();

const User = require('../models/user');
const TypeGebruiker = require('../models/typeGebruiker');


router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/', function (req, res, next) {
    const user = new User({
        email: req.body.email,
        wachtwoord: req.body.wachtwoord,
        username: req.body.username,
        about: "",
        typeGebruiker: "5a4d0a24ed2eb028a03f6543",
        posts:[],
        subscripties:[],
        comments:[]
    });
    console.log(user);

    user.save();

    res.redirect('/');
});

router.post('/type', function (req, res, next) {
    const typeGebruiker = new TypeGebruiker({
        typeNaam: req.body.naam,
        omschrijving: req.body.omschrijving
    });
    res.redirect('/');
});

module.exports = router;
