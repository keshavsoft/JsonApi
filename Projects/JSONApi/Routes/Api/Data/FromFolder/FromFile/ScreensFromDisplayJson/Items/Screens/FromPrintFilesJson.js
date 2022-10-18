var express = require('express');
var router = express.Router();

let CommonGetData = require("./FromPrintFilesJson/GetData");

router.use('/GetData', CommonGetData);

module.exports = router;