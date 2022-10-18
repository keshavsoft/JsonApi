var express = require('express');
var router = express.Router();

router.use('/ShowData', require('./PreLoad/ShowData'));

module.exports = router;