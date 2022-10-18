var express = require('express');
var router = express.Router();

router.use('/PreLoad', require('./Masters/PreLoad'));

module.exports = router;