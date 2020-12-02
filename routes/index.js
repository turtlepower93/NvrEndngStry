var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NvrEndngStry' });
});
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate (
  'google',
  {
    successRedirect: '/stories',
    failureMessage: '/'
  }
))

router.get('/logout', function (req,res) {
  req.logOut();
  res.redirect('/')
})

module.exports = router;
