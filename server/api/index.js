const router = require('express').Router();


router.use('/iex', require('./iex'));
router.use('/transactions', require('./transactions'));


module.exports = router;