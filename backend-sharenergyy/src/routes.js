const router = require('express').Router();

const g1 = require('../src/routes/g1');

router.use('/g1', g1);

module.exports = router;
