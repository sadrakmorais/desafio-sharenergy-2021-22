const router = require('express').Router();

const auth = require('./auth');
const users = require('./users');
const admins = require('./admins');

router.use('/auth', auth);
router.use('/users', users);
router.use('/admins', admins);

module.exports = router;
