const express = require('express');
const router = express.Router();

//importing services controller
const servicesController = require('../controllers/services.controllers')
router.get('/getall', servicesController.getAllServices);

router.get('/getone', servicesController.getOneService);

router.get('/create', servicesController.createNewServiceForm);
router.post('/create', servicesController.createNewService);

router.put('/update', servicesController.updateService);

router.delete('/delete', servicesController.deleteService);

module.exports = router;
