const auth = require('../../models/auth/mdl_signup');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jwt-simple');
const config = require('../../config.js');

//  *************************** SIGNUP ********************************
function validateEmailAndPass(req, res, next) {
  if (!req.body.email) {
    const err = 'Email field must not be blank';
    next(err);
  }
  if (!req.body.email.includes('@') || !req.body.email.includes('.com')) {
    const err = 'Please enter valid email';
    next(err);
  }

  if (!req.body.password) {
    const err = 'Password field must not be blank';
    next(err);
  }

  if (req.body.password.length < 6) {
    const err = 'password must be at least 6 characters long';
    next(err);
  }
  //  add validation for uppercase etc.
  next();
}

function checkForUser(req, res, next) {
  const { email } = req.body;
  auth.checkForUser(email).then(user => {
    if (user) {
      const err = 'This user already exists';
      next(err);
    } else {
      next();
    }
  });
}

function addNewUser(req, res) {
  const { email, password } = req.body;
  bcrypt.hash(password, 12).then(hashed_password => {
    const user = {
      email,
      hashed_password
    };
    auth.addNewUser(user).then(addedUser => {
      const newUser = addedUser[0];
      delete newUser.hashed_password;
      res.send({
        token: tokenForUser(newUser),
        admin: newUser.admin
      });
    });
  });
}
// ******************  HELPER FUNCTION *******************
function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}
//  ********************* SIGNIN AUTHENTICATION *************

function signin(req, res) {
  res.send({ token: tokenForUser(req.user), admin: req.user.admin });
}

module.exports = { validateEmailAndPass, checkForUser, addNewUser, signin };
