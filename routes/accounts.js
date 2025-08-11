var express = require('express');
var router = express.Router();

router.get('/getall', (req, res) => {
  res.json({
    "name": 'Dereje',
    lastname: 'boy'
  });
});

router.get('/getone', (req, res) => {
  res.send('one acc info')
});

router.post('/create', (req, res) => {
  res.send('Acount information created')
});

router.put('/update', (req, res) => {
  res.send('Account inform updated')
});

router.delete('/delete', (req, res) => {
  res.send('Account inform deleted')
});


module.exports = router;
