var express = require('express');
var router = express.Router();
let CommonColumnsAsArray = require("./FromConfig/ColumnsAsArray");
let CommonTreeWitData = require("./FromConfig/TreeWitData");

router.use('/ColumnsAsArray', CommonColumnsAsArray);
router.use('/TreeWitData', CommonTreeWitData);

module.exports = router;