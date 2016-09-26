var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {


  res.redirect('/index');
});

router.get('/front', function(req, res, next) {
  //if user clicks create template button, redirect to index.html page

  res.redirect('/index');
});

module.exports = router;
