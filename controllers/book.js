const BooksSchema = require('../models/Book.Schema')

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

exports.editBookById =  ( req , res ) => {
    BooksSchema.findById(req.query.id)
    .then(b=>{
        if (b) {
            b.name = req.body.name;
            b.author = req.body.author,
            b.publisher  = req.body.publisher,
            b.yearPublished  = req.body.yearPublished,
            b.category  = req.body.category,
            b.save()
             .then(b2=>{
                res.status(200).json(b2);
            })
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}

exports.DeleteBookById =  ( req , res ) => {
    BooksSchema.findByIdAndDelete({_id: req.query.id })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getBooksByCategory =  ( req , res ) => {
    BooksSchema.find({ category: req.body.category })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}

exports.getBooksByPublisher =  ( req , res ) => {
    BooksSchema.find({ publisher: req.body.publisher })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}

exports.getBooksByAuthor =  ( req , res ) => {
    BooksSchema.find({ author: req.body.author })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}

exports.getBooksByAuthorAndYearPublished =  ( req , res ) => {
    BooksSchema.find({ author: req.body.author, yearPublished: req.body.yearPublished })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}