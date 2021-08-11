var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    name: String,
    publisher: {
        type: String,
        required: true
    },
    yearpublisher: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    }
});

var Book = module.exports = mongoose.model('book', bookSchema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}