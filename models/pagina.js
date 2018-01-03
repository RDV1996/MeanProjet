var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naam: {type: String, required: true},
    omschrijving: {type: String, required: true},
    eigenaarId: {type: Schema.Types.ObjectId, ref: 'User'},
    moderators:[{type:Schema.Types.ObjectId, ref: 'User'}]
});

module.exports =  mongoose.model('Pagina', schema);