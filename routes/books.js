const express = require('express');
const router = express.Router();
const books = require('../controllers/book');


router.post('/getAllCategories' , books.getAllCategories);
router.post('/getAllBooks' , books.getAllBooks);
// router.get('/getBookById' ,books.getBookById); 
// router.get('/getBooksByCategory' ,books.getBooksByCategory);
// router.put('/addCategory' ,books.addCategory);
// router.put('/editCategory' ,books.editCategory);
// router.put('/deleteCategory' ,books.deleteCategory); 
// router.put('/addBook' ,books.addBook); 
// router.put('/editBook' ,books.editBook);
// router.put('/deleteBook' ,books.deleteBook);

module.exports = router;
