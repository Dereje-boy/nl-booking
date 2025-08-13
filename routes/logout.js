const express = require('express')
const router = express.Router();

//importing login controller
const logoutController = require('../controllers/logout.controller')

router.get('/', logoutController.logout);

module.exports = router