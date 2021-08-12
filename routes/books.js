const express = require('express');
const router = express.Router();
const books = require('../controllers/book');

router.post('/add-new-category' , books.addNewCategory);
router.get('/get-category-by-id' , books.getCategoryById);
router.put('/view-all-categories' ,books.getAllCategories);
router.post('/add-new-books' , books.addNewBooks);
router.get('/get-book-by-id' ,books.getBookById); 
router.put('/view-all-books' ,books.getAllBooks);
router.put('/add-Category' ,books.addCategory);
// router.put('/editCategory' ,books.editCategory);
// router.put('/deleteCategory' ,books.deleteCategory); 
// router.put('/addBook' ,books.addBook); 
// router.put('/editBook' ,books.editBook);
// router.put('/deleteBook' ,books.deleteBook);

module.exports = router;
