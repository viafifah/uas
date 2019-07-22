const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();

const bookController = require('../controllers/book');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', bookController.getIndexBook);
router.get('/:book_id', bookController.getDetailBook);
router.post('/', urlencodedParser, bookController.storeBook);
router.post('/:book_id', urlencodedParser, bookController.updateBook);
router.post('/:book_id/destroy', urlencodedParser, bookController.destroyBook);

module.exports = router; 