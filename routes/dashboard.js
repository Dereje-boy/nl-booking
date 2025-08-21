const express = require('express')
const router = express.Router();

//importing login controller
const dashboardController = require('../controllers/dashboard.controller.js')

router.get('/', dashboardController.showDashboard);


module.exports = router