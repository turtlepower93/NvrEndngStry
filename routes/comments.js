var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth')

router.post('/stories/:id/comments', isLoggedIn,commentsCtrl.create)
//router.delete('/stories/:id', isLoggedIn, commentsCtrl.delete)

module.exports = router;