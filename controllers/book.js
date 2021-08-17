const BooksSchema = require('../models/Book.Schema')
const CategorySchema = require('../models/Categories.Schema')

exports.addNewBooks = async ( req , res ) => {
    if ( !req.body.name ||!req.body.author || !req.body.publisher || !req.body.yearPublished || !req.body.category){
        res.status(400).json({msg:"Book Does Not Exist"});
    }
    const category  = await CategorySchema.findById(req.body.category)
    if (category) {
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
    } else {
        res.status(400).json({msg: "Category does not exist"});
    }
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
    if (!req.query.category) {
        return res.status(400).json({ msg: "You Need To Send The Category!" })
    }
    BooksSchema.find({ category: req.query.category })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getBooksByPublisher =  ( req , res ) => {
    if (!req.query.publisher) {
        return res.status(400).json({ msg: "You Need To Send The Publisher!" })
    }
    BooksSchema.find({ publisher: req.query.publisher })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getBooksByAuthor =  ( req , res ) => {
    if (!req.query.author) {
        return res.status(400).json({ msg: "You Need To Send The Author!" })
    }
    BooksSchema.find({ author: req.query.author })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

exports.getBooksByAuthorAndYearPublished =  ( req , res ) => {
    if (!req.query.yearPublished || !req.query.author) {
        return res.status(400).json({ msg: "You Need To Send The YearPublished!" })
    }
    BooksSchema.find({ yearPublished: req.query.yearPublished })
    .then(b=> {
        return res.status(200).json({ b: b });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}