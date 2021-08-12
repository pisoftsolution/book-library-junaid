const BooksSchema = require('../models/Book.Schema')
const CategorySchema = require('../models/Categories.Schema')

exports.addNewCategory =  ( req , res ) => { 
    if (!req.body.Name){
        res.status(400).json({msg:"Category Does Not Exist"});
    }
    let categoryname = new CategorySchema({
        Name : req.body.Name,
    });
    categoryname.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}

exports.getCategoryById =  ( req , res ) => {
    if (!req.query.id) {
        return res.status(400).json({ msg: "Category ID is Invalid!" })
    }
    CategorySchema.find({ _id: req.query.id })
    .then(book => {
        return res.status(200).json({ book: book });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getAllCategories =  ( req , res ) => {
    CategorySchema.find({})
    .then(b=> {
        return res.status(200).json({ CategorySchema: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}

exports.addCategory =  ( req ,res ) => {
    if (!req.body.Name){
            res.status(400).json({msg:"This Is Invalid Data"});
    }
    let category = new CategorySchema({
        Name : req.body.Name
    });
    category.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}

exports.addNewBooks =  ( req , res ) => {
    if ( !req.body.name ||!req.body.author || !req.body.publisher || !req.body.yearPublished || !req.body.category){
        res.status(400).json({msg:"Book Does Not Exist"});
    }
    let bookdetails = new BooksSchema({
        name : req.body.name,
        author: req.body.author,
        publisher : req.body.publisher,
        yearPublished : req.body.yearPublished,
        category : req.body.category,
    });
    bookdetails.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })   
}

exports.getBookById =  ( req , res ) => {
    if (!req.query.id) {
        return res.status(400).json({ msg: "Book ID is Invalid!" })
    }
    BooksSchema.find({ _id: req.query.id })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getAllBooks =  ( req , res ) => {
    BooksSchema.find({})
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}
