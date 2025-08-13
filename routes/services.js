const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//importing services controller
const servicesController = require('../controllers/services.controllers')

// Storage configuration for services images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/services'); // save in /public/uploads/services
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // unique name + original extension
    }
});

const upload = multer({ storage });

router.get('/getall', servicesController.getAllServices);

router.get('/getone', servicesController.getOneService);

router.get('/create', servicesController.createNewServiceForm);
router.post('/create', upload.array('photos', 10), servicesController.createNewService);

router.get('/update', servicesController.showUpdateServiceForm);
router.put('/update', upload.array('photos', 10), servicesController.updateService);

router.delete('/delete', servicesController.deleteService);

module.exports = router;
