const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("Categories", CategoriesSchema)    