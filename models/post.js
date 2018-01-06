var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    isVideo: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    pagina: {type: Schema.Types.ObjectId, ref: 'Pagina'},
    comments:[{type:Schema.Types.ObjectId, ref: 'Comment'}],
    likes:[{type:Schema.Types.ObjectId, ref: 'user'}],
    madeOn: {type: Date, required: true}
});

module.exports =  mongoose.model('Post', schema);