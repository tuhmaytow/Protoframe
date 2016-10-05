var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile('public/views/front.html', { root: path.join(__dirname, '../') });
});

router.post('/signup', function(req, res, next) {
  if (req.body.password === req.body.password2) {
  knex('users')
  .where('user_name', req.body.username)
  .orWhere('email_address', req.body.email)
  .first()
  .then(function(user) {
    if (user) {
      res.send("Account already exists.");
    } else {
      let hash = bcrypt.hashSync(req.body.password, 10);
      knex('users')
      .insert({
        user_name: req.body.username,
        password: hash,
        email_address: req.body.email
      })
      .returning('*')
      .then(function(newUser) {
        req.session.user = newUser[0].id;
        req.session.username = newUser[0].username;
        console.log('account created!')
        res.redirect('/users/' + req.session.user);
      });
    }
  });
} else {
  res.send("Passwords do not match.");
}
});

// router.get('/login', function(req, res, next) {
//   console.log('yeah!');
// });

router.post('/login', function(req, res, next) {
  knex('users')
  .where('user_name', req.body.username)
  .first()
  .then(function(user) {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user.id;
        req.session.username = user.username;
        res.redirect('/users/' + req.session.user);
      } else {
        res.send("Invalid Username/Password");
      }
    } else {
      res.send("Invalid Username/Password");
    }
  });
});

// router.get('/logout', function(req, res, next) {
//   req.session = null;
//   res.redirect('/front');
// });


module.exports = router;
