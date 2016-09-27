var express = require('express');
var router = express.Router();
var knex = require('../db/knex'),
var bcrypt = require('bcrypt');

router.get('/front', function(req, res, next) {
  res.redirect('/index');
});

router.post('/login', function(req, res, next) {


});

router.post('/signup', function(req, res, next) {

});








module.exports = router;
