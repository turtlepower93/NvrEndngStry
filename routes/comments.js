var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth')

router.post('/stories/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete)
router.get('/:id/edit', isLoggedIn, commentsCtrl.edit);
router.put('/comments/:id', isLoggedIn, commentsCtrl.update)

module.exports = router;