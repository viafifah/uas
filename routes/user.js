const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();

const userController = require('../controllers/user');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', userController.getAllUser);
router.get('/:user_id', userController.getDetailUser);
router.post('/', urlencodedParser, userController.storeUser);
router.put('/:user_id', urlencodedParser, userController.updateUser);
router.delete('/:user_id/destroy', urlencodedParser, userController.destroyUser);

router.post('/search/:username', urlencodedParser, userController.searchUser);

module.exports = router;