var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  let userId = req.params.id;
  res.send('some JSON Session from DB');
});

router.post('/save', function(req, res, next) {
  let userId = req.params.id;
  // let sessionString = req.body.something;
  console.log(req.body, "req");
  // knex stuff to save the session
    // if save sucessful
      res.sendStatus(200);
    // if unsuccessful
      res.sendStatus(500);

});

module.exports = router;
