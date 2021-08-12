const booksSchema = require('../models/Book.Schema')
const categorySchema = require('../models/Categories.Schema')

exports.getAllCategories =  ( req , res ) => { 
    if (!req.body.Categories){
        res.status(400).json({msg:"The Data Is Invalid"});
    }
    let categoryname = new categorySchema({
        Categories : req.body.Categories,
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


exports.getAllBooks =  ( req , res ) => {
    if ( !req.body.name ||!req.body.author || !req.body.publisher || !req.body.yearPublished || !req.body.category){
        res.status(400).json({msg:"The Data Is Invalid"});
    }
    let bookdetails = new booksSchema({
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