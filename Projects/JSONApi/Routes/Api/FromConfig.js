var express = require('express');
var router = express.Router();
let CommonColumnsAsArray = require("./FromConfig/ColumnsAsArray");

router.use('/ColumnsAsArray', CommonColumnsAsArray);

module.exports = router;