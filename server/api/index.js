const router = require('express').Router();


router.use('/iex', require('./iex'));
router.use('/transactions', require('./transactions'));
router.use('/portfolio', require('./portfolio'));


module.exports = router;