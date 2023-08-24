var express = require('express');
var router = express.Router();
let CommonOnKeys = require("./AggregateFuncs/OnKeys");

router.use('/OnKeys', CommonOnKeys);

module.exports = router;