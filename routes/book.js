const express = require('express');
const bodyParser = require('body-parser');
const auth = require('../configs/auth');

const router = express.Router();

const bookController = require('../controllers/book');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', bookController.getIndexBook);
router.get('/:book_id', bookController.getDetailBook);
router.post('/', urlencodedParser, auth.verifyToken, bookController.storeBook);
router.put('/:book_id', urlencodedParser, auth.verifyToken, bookController.updateBook);
router.delete('/:book_id', urlencodedParser, auth.verifyToken, bookController.destroyBook);

router.post('/search/:judul', urlencodedParser, bookController.searchBook);

module.exports = router; 