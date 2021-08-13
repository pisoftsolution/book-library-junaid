const express = require('express');
const router = express.Router();
const books = require('../controllers/categories');

router.post('/add-new-category' , books.addNewCategory);
router.get('/get-category-by-id' , books.getCategoryById);
router.get('/view-all-categories' , books.getAllCategories);
router.post('/add-Category' , books.addCategory);
router.put('/edit-category-by-id' , books.editCategoryById);
router.delete('/delete-category-by-id' , books.DeleteCategoryById);

module.exports = router;