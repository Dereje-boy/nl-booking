var express = require('express');
var router = express.Router();

router.get('/getall', (req, res) => {
  res.json([{
    id: 1,
    shortname: 'Keficho Room'
  }, {
    id: 2,
    shortname: 'Gurage Room'
  },
  ])
});

router.get('/getone', (req, res) => {
  res.send('one service info')
});

router.post('/create', (req, res) => {
  res.send('new service created')
});

router.put('/update', (req, res) => {
  res.send('service inform updated')
});

router.delete('/delete', (req, res) => {
  res.send('service deleted')
});


module.exports = router;
