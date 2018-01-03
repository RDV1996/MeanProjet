var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    typeNaam: {type: String, required: true},
    omschrijving: {type: String, required: true}
});

module.exports =  mongoose.model('TypeGebruiker', schema);