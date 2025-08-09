var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getall', (req, res) => {
  res.json({
    id: 1,
    shortname: 'Keficho Room'
  })
});

module.exports = router;
