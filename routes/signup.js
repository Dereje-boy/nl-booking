const express = require('express')
const router = express.Router();
const multer = require('multer');
var path = require('path');

//importing signup controller
const signupController = require('../controllers/signup.controller')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/users/'); // Folder to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage });

router.get('/', signupController.showSignupForm);
router.post('/', upload.single('profilePicture'), signupController.processSignup);

module.exports = router