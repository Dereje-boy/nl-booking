var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getall', (req, res) => {
  res.json({
    id: 1,
    s_id: 2,
    aid: 29
  })
});

module.exports = router;
