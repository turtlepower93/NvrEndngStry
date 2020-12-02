var express = require('express');
var router = express.Router();
var storiesCtrl = require('../controllers/stories.js')

const isLogginIn = require('../config/auth')

router.get('/', isLoggedIn,storiesCtrl.index)