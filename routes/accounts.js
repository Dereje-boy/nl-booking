const express = require('express');
const router = express.Router();

//importing controllers
const accountsController = require('../controllers/accounts.controllers');

router.get('/getall', accountsController.getAllAccounts);

router.get('/getone', accountsController.getOneAccount);

router.post('/create', accountsController.createNewAccount);

router.put('/update', accountsController.updateAccount);

router.delete('/delete', accountsController.deleteAccount);


module.exports = router;
