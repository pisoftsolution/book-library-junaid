const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }, 
    publisher: {
        type:String,
        required: true
    },
    yearPublished: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("BookDetails", bookSchema);