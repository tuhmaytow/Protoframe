var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.get('/front', function(req, res, next) {
  res.redirect('/index');
});

router.post('/signup', function(req, res, next) {
  if (req.body.password === req.body.password2) {
  knex('users')
  .where('username', req.body.username)
  .orWhere('email', req.body.email)
  .first()
  .then(function(user) {
    if (user) {
      res.render('index', {signUpError: "Account already exists."});
    } else {
      let hash = bcrypt.hashSync(req.body.password, 10);
      knex('users')
      .insert({
        username: req.body.username,
        password: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
      })
      .returning('*')
      .then(function(newUser) {
        req.session.id = newUser[0].id;
        req.session.username = newUser[0].username;
        res.redirect('/users/' + req.session.id);
      });
    }
  });
} else {
  res.render('front', {signUpError: "Passwords do not match."});
}
});

router.post('/login', function(req, res, next) {
  knex('users')
  .where('username', req.body.username)
  .first()
  .then(function(user) {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.id = user.id;
        req.session.username = user.username;
        res.redirect('/users/' + req.session.id + '/events');
      } else {
        res.render('index', {loginError: "Invalid Username/Password"});
      }
    } else {
      res.render('front', {loginError: "Invalid Username/Password"});
    }
  });
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/front');
});


module.exports = router;
