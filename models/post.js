var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    isVideo: {type: Boolean, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    paginaId: {type: Schema.Types.ObjectId, ref: 'Pagina'},
    comments:[{type:Schema.Types.ObjectId, ref: 'Comment'}],
    likes:[{type:Schema.Types.ObjectId, ref: 'user'}]
});

module.exports =  mongoose.model('Post', schema);