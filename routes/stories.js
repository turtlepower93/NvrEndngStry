var express = require('express');
var router = express.Router();
var storiesCtrl = require('../controllers/stories.js')
const isLogginIn = require('../config/auth')

router.get('/', storiesCtrl.index);
router.get('/new', isLogginIn, storiesCtrl.new);
router.get('/:id', isLogginIn,storiesCtrl.show);
router.post('/', isLogginIn, storiesCtrl.create);

module.exports = router;