var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: {type: String, required: true},
    wachtwoord: {type: String, required: true},
    username: {type: String, required: true},
    about: {type: String, required: true},
    typeGebruiker: {type: Schema.Types.ObjectId, ref: 'TypeGebruiker'},
    posts:[{type:Schema.Types.ObjectId, ref: 'Post'}],
    subscripties:[{type:Schema.Types.ObjectId, ref: 'Pagina'}],
    comments:[{type:Schema.Types.ObjectId, ref: 'Comment'}]

});

module.exports =  mongoose.model('User', schema);
