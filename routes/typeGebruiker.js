var express = require('express');
var router = express.Router();

var Type = require('../models/typeGebruiker');

router.get('/:id', function (req, res, next) {
    Type.findById(req.params.id, function(err, result){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(result)
    });
});

module.exports = router;
