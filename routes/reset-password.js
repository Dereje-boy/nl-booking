const express = require('express')
const router = express.Router();

//importing resetPassword controller
const resetPasswordController = require('../controllers/resetPassword.controller')

router.get('/', resetPasswordController.showResetPasswordForm);
router.post('/', resetPasswordController.processLogin);

module.exports = router