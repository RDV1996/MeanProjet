var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Pagina = require('../models/pagina');


router.get('/', function (req, res, next) {
    Pagina.find(function(err, pagina){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            pagina:pagina
        })
    });
});

router.get('/:id', function (req, res, next) {
    Pagina.findById(req.params.id, function(err, pagina){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            pagina:pagina
        })
    });
});

router.post('/', function (req, res, next) {
    var pagina = new Pagina({
        naam:  req.body.naam,
        omschrijving:  req.body.omschrijving,
        eigenaar:  req.body.eigenaar,
        moderators: req.body.moderators
    });
    pagina.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'pagina created',
            pagina: result
        });
    });
});

router.get('/naam/:id', function (req, res, next) {
    Pagina.findById(req.params.id, function(err, pagina){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        if(pagina == null){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(
            pagina.naam
        )
    });
});

router.get('/byname/:name', function (req, res, next) {
    Pagina.find({
            naam : new RegExp(req.params.name.replace(/\s+/g, "\\s+"), "i")

    },function(err, pagina){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            pagina:pagina
        })
    });
});

module.exports = router;
