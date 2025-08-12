const express = require('express')
const router = express.Router();

//importing login controller
const loginController = require('../controllers/login.controller')

router.get('/', loginController.showLoginForm);
router.post('/', loginController.processLogin);

module.exports = router