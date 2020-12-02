var express = require('express');
var router = express.Router();
var storiesCtrl = require('../controllers/stories.js')
const isLogginIn = require('../config/auth')

router.get('/', storiesCtrl.index);
router.get('/new', storiesCtrl.new);
// router.get('/:id', storiesCtrl.show);
// router.get('/', isLogginIn, storiesCtrl.create);

module.exports = router;