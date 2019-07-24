const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router();

const penerbitController = require('../controllers/penerbit');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/', penerbitController.getAllPenerbit);
router.get('/:penerbit_id', penerbitController.getDetailPenerbit);
router.post('/', urlencodedParser, penerbitController.storePenerbit);
router.put('/:penerbit_id', urlencodedParser, penerbitController.updatePenerbit);
router.delete('/:penerbit_id', urlencodedParser, penerbitController.destroyPenerbit);

router.post('/search/:name', urlencodedParser, penerbitController.searchPenerbit);

module.exports = router; 