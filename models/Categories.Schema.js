const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("books", CategoriesSchema)