'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId', function(req, res, next) {
  if(req.session.user === req.params.userId) {
      res.sendFile('public/views/index.html', { root: path.join(__dirname, '../') });
  } else {
    res.sendFile('public/views/index.html', { root: path.join(__dirname, '../') });
  }
});

// router.post('/:userId/save', function(req, res, next) {
//   let userId = req.params.userId;
//   let sessionString = req.body.savedSession;
//
//   knex('images').insert({json: sessionString, userId: 1});
//
//   // knex stuff to save the session
//     // if save sucessful
//       res.sendStatus(200);
//     // if unsuccessful
//       res.sendStatus(500);
//
// });

module.exports = router;
