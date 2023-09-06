var express = require('express');
var router = express.Router();
let CommonOnKeys = require("./AggregateFuncs/OnKeys");
let CommonOnValues = require("./AggregateFuncs/OnValues");

router.use('/OnKeys', CommonOnKeys);
router.use('/OnValues', CommonOnValues);

module.exports = router;