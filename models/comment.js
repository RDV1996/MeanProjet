var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    body: {type: String, required: true},
    lastEditedOn: {type: Date, required: false},
    isTopComment: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    post: {type: Schema.Types.ObjectId, ref: 'Post'},
    childComments:[{type:Schema.Types.ObjectId, ref: 'Comment'}],
    likes:[{type:Schema.Types.ObjectId, ref: 'User'}]
});

module.exports =  mongoose.model('Comment', schema);