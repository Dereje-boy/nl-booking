var express = require('express');
var router = express.Router();

router.get('/getall', (req, res) => {
  res.json([{
    id: 1,
    s_id: 2,
    aid: 29
  }, {
    id: 2,
    s_id: 16,
    aid: 184
  }])
});

router.get('/getone', (req, res) => {
  res.send('one booking info')
});

router.post('/create', (req, res) => {
  res.send('new booking')
});

// router.put('/update', (req, res) => {
//   res.send('service inform updated')
// });

router.delete('/delete', (req, res) => {
  res.send('booking deleted')
});

module.exports = router;
