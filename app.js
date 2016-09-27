var express = require('express');
var app = express();
var path = require('path');
var knex = require('./db/knex');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
