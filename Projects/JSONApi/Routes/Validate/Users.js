var express = require('express');
var router = express.Router();
let CommonInUserDataJson = require("./Users/InUserDataJson");

router.use('/InUserDataJson', CommonInUserDataJson);

module.exports = router;