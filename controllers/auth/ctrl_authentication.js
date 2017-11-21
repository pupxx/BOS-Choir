const auth = require('../../models/auth/mdl_signup');


function validateEmailAndPass (req, res, next) {
  if(!req.body.email) {
    var err = 'Email field must not be blank'
    next(err)
  }
  if(!req.body.email.includes('@') || !req.body.email.includes('.com')) {
    var err = 'Please enter valid email'
    next(err)
  }
  
  if(!req.body.password) {
    var err = 'Password field must not be blank'
    next(err)
  }

  if(req.body.password.length < 6){
    var err = 'password must be at least 6 characters long';
    next(err)

    //add validation for uppercase etc.
  }
  
  next()
}

function checkForUser(req, res, next){
  var email = req.body.email;
  console.log(email);
  auth.checkForUser(email).then((user)=>{
    res.send(user)
  })
}

module.exports = { validateEmailAndPass, checkForUser }