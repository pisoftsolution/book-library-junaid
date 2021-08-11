let Router = require('express').Router();

Router.get('/', function (req, res){
    res.json({
        status: 'WORKING',
        message: 'This is the /api/ route!'
    });
});

var bookController = require('./bookController');
 
Router.route('/books')
    .get(bookController.index)
    .post(bookController.new);
Router.route('/books/:book_id')
    .get(bookController.view)

module.exports = Router;