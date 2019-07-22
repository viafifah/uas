const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router();

const categoryController = require('../controllers/category');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/', categoryController.getAllCategory);
router.get('/:category_id', categoryController.getDetailCategory);
router.post('/', urlencodedParser, categoryController.storeCategory);
router.put('/:category_id', urlencodedParser, categoryController.updateCategory);
router.delete('/:category_id', urlencodedParser, categoryController.destroyCategory);

router.post('/search/:name', urlencodedParser, categoryController.searchCategory);

module.exports = router; 