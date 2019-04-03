var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var emailIsCorrect = req.body.email === 'email'
  var passwordIsCorrect = req.body.password === 'password'
  if (emailIsCorrect && passwordIsCorrect) {
    res.status(200)
    res.send('Authorized')
    return
  }
  res.status(401)
  res.send('Unauthorized')
})

module.exports = router;
