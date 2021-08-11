Book = require('./bookModel');

exports.index = function (req, res) {
    Book.get(function (err, books) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Books retrieved successfully",
           data: books
       });
    });
};

exports.new = function (req, res) {
    var book = new Book();
    book.name = req.body.name ? req.body.name : book.name;
    book.author = req.body.author;
    book.name = req.body.name;
    book.publisher = req.body.publisher;
    book.yearpublisher = req.body.yearpublisher;
    book.category = req.body.category;

    book.save(function (err) {
       if (err)
           res.json(err);
       res.json({
           message: 'New book created!',
           data: book
       });
    });
};

exports.view = function (req, res) {
    Book.findById(req.params.book_id, function (err, book) {
       if (err)
           res.send(err);
       res.json({
           message: '1 book found!',
           data: book
       });
    });
};