const express = require('express');
const router = express.Router();
const books = require('../controllers/book');

router.post('/add-new-books' , books.addNewBooks);
router.get('/get-book-by-id' ,books.getBookById); 
router.get('/view-all-books' ,books.getAllBooks);
router.put('/edit-book-by-id' ,books.editBookById);
router.delete('/delete-book-by-id' ,books.DeleteBookById);
router.get('/get-books-by-category' ,books.getBooksByCategory);
router.get('/get-books-by-publisher' ,books.getBooksByPublisher);
router.get('/get-books-by-author' ,books.getBooksByAuthor);
router.get('/get-books-by-author-year-published' ,books.getBooksByAuthorAndYearPublished);

module.exports = router; 
