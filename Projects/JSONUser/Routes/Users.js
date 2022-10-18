var express = require('express');
var router = express.Router();

router.use('/Api', require("./Users/Api"));

module.exports = router;