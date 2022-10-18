var express = require('express');
var router = express.Router();
let CommonGetData = require("./ItemsDisplayForFile/GetData");

router.use('/GetData', CommonGetData);

module.exports = router;