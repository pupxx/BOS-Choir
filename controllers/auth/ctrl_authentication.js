
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
  
  next()
}



module.exports = { validateEmailAndPass }