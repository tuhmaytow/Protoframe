var express = require('express');
var router = express.Router();

router.get('/front', function(req, res, next) {
  res.redirect('/index');
});

module.exports = router;
