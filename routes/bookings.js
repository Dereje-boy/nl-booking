const express = require('express');
const router = express.Router();

//importing bookings controller
const bookingsController = require('../controllers/bookings.controllers');

router.get('/getall', bookingsController.getAllBookings);

router.get('/getone', bookingsController.getOneBooking);

router.post('/create', bookingsController.createNewBooking);

router.put('/update', bookingsController.updateBooking);

router.delete('/delete', bookingsController.deleteBooking);

module.exports = router;
