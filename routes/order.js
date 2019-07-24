const express = require('express');
const bodyParser = require('body-parser');
const auth = require('../configs/auth');

const router = express.Router();

const orderController = require('../controllers/order');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/user/:user_id', orderController.getUserOrder);
router.post('/', urlencodedParser, auth.verifyToken, orderController.storeOrder);
// router.get('/:book_id', orderController.getDetailBook);
// router.post('/', urlencodedParser, auth.verifyToken, orderController.storeBook);
// router.put('/:book_id', urlencodedParser, auth.verifyToken, orderController.updateBook);
// router.delete('/:book_id', urlencodedParser, auth.verifyToken, orderController.destroyBook);

// router.post('/search/:judul', urlencodedParser, orderController.searchBook);

module.exports = router; 