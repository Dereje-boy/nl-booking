const express = require('express')
const router = express.Router();

//importing signup controller
const signupController = require('../controllers/signup.controller')

router.get('/', signupController.showSignupForm);
router.post('/', signupController.processSignup);

module.exports = router