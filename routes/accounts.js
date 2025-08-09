var express = require('express');
var router = express.Router();

/* GET accounts listing. */
router.get('/getall', (req, res) => {
  res.json({
    "name": 'Dereje',
    lastname: 'boy'
  });
});

module.exports = router;
