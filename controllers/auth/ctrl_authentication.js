const auth = require('../../models/auth/mdl_signup');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jwt-simple');
const config = require('../../config.js');

//  *************************** SIGNUP ********************************
function validateEmailAndPass(req, res, next) {
  const { email, password } = req.body;
  const status = 400;
  if (!checkForEmailPass(email, password)) {
    const err = { status, message: 'Email and/or Password can not be blank.' };
    next(err);
  } else if (!email.includes('@')) {
    const err = { status, message: 'Please enter valid email' };
    next(err);
  } else if (password.length < 6) {
    const err = { status, message: 'Password must be at least 6 characters long' };
    next(err);
  } else if (!checkForUpperCase(password)) {
    const err = { status, message: 'Password must have at least one Capital letter' };
    next(err);
  } else if (!hasANumber(password)) {
    const err = { status, message: 'Password must contain at least one number' };
    next(err);
  }
  next();
}

function checkForUser(req, res, next) {
  const { email } = req.body;
  auth.checkForUser(email).then(user => {
    if (user) {
      const err = { status: 400, message: 'This user already exists' };
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
        token: tokenForUser(newUser)
      });
    });
  });
}
//  ********************* SIGNIN AUTHENTICATION *************

function signin(req, res) {
  res.send({ token: tokenForUser(req.user) });
}

// ******************  HELPER FUNCTIONS *******************

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp, isAdmin: user.admin }, config.secret);
}

function checkForEmailPass(email, pass) {
  if (!email || !pass) {
    return false;
  }
  return true;
}

function checkForUpperCase(str) {
  const arr = str.split('');
  const hasCap = arr.some(el => el === el.toUpperCase());
  return hasCap;
}

function hasANumber(str) {
  const arr = str.split('');
  const hasNumber = [];
  const mappedArr = arr.map(el => parseInt(el, 10));
  mappedArr.forEach(el => {
    if (el >= 0) {
      hasNumber.push(el);
    }
  });
  if (!hasNumber.length) {
    return false;
  }
  return true;
}

module.exports = { validateEmailAndPass, checkForUser, addNewUser, signin };
