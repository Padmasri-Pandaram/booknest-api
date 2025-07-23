const express = require('express');
const bookController = require('../controllers/bookController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const bookValidator = require('../validators/bookValidator');
const isAdmin = require('../middlewares/admin');
const router = express.Router();

router.use(auth);

// @route   GET /api/books
// @desc    Get all books
router.get('/', bookController.getBooks);

// @route   POST /api/books
// @desc    Add a new book
router.post('/', validate(bookValidator), bookController.addBook);

// @route   PUT /api/books/:id
// @desc    Update a book
router.put('/:id', validate(bookValidator), bookController.updateBook);

// @route   DELETE /api/books/:id
// @desc    Delete a book (admin only - implement role check in controller)
router.delete('/:id', isAdmin, bookController.deleteBook);

module.exports = router;
