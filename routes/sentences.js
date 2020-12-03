var express = require('express');
var router = express.Router();
const sentencesCtrl = require('../controllers/sentences');
const isLoggedIn = require('../config/auth')


router.post('/stories/:id/sentences', isLoggedIn, sentencesCtrl.create)
//router.delete('/stories/:id', isLoggedIn, sentencesCtrl.delete)

module.exports = router;