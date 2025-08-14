const express = require('express');
const router = express.Router();
const multer = require('multer');
var path = require('path');

//importing controllers
const accountsController = require('../controllers/accounts.controllers');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/users/'); // Folder to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage });


router.get('/getall', accountsController.getAllAccounts);

router.get('/getone', accountsController.getOneAccount);

router.get('/create', accountsController.showCreateNewAccountForm);
router.post('/create', upload.single('profilePicture'), accountsController.createNewAccount);

router.get('/update/:id', accountsController.showUpdateAccountForm);
router.put('/update', upload.single('profilePicture'), accountsController.updateAccount);

router.post('/delete', accountsController.deleteAccount);

module.exports = router;
