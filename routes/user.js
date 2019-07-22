const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../configs/auth');
const router = express.Router();

const userController = require('../controllers/user');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', userController.getAllUser);
router.get('/:user_id', userController.getDetailUser);
router.post('/', urlencodedParser, auth.verifyToken, userController.storeUser);
router.put('/:user_id', urlencodedParser, auth.verifyToken, userController.updateUser);
router.delete('/:user_id/destroy', urlencodedParser, auth.verifyToken, userController.destroyUser);

router.post('/search/:username', urlencodedParser, userController.searchUser);

router.post('/login', urlencodedParser, userController.loginUser);

module.exports = router;