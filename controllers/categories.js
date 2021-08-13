const CategorySchema = require('../models/Categories.Schema')

exports.addNewCategory =  ( req , res ) => { 
    if (!req.body.name){
        res.status(400).json({msg:"Category Does Not Exist"});
    }
    let categoryname = new CategorySchema({
        name : req.body.name,
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

exports.editCategoryById =  ( req , res ) => {
    CategorySchema.findById(req.query.id)
    .then(b=>{
        if (b) {
            b.name = req.body.name;
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

exports.DeleteCategoryById =  ( req , res ) => {
    CategorySchema.findByIdAndDelete({_id: req.query.id })
    .then(c=> {
        return res.status(200).json({ c: c });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}