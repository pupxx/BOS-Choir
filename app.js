const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const church = require('./routes/church');
const announcement = require('./routes/announcement');
const performance = require('./routes/performance');
const member = require('./routes/member');
const rehearsals = require('./routes/rehearsal');
const signup = require('./routes/signup');
const signin = require('./routes/signin');

const app = express();

//  CORS
app.use(cors());

// uncomment after placing your favicon in /public
//  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/churches', church);
app.use('/announcements', announcement);
app.use('/performances', performance);
app.use('/members', member);
app.use('/rehearsals', rehearsals);
app.use('/signup', signup);
app.use('/signin', signin);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
