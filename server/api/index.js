const router = require('express').Router();


router.use('/iex', require('./iex'));

module.exports = router;