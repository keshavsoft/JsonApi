var express = require('express');
var router = express.Router();

let CommonGetData = require("./Screens/GetData");
let CommonFromPrintFilesJson = require("./Screens/FromPrintFilesJson");

router.use('/GetData', CommonGetData);
router.use('/FromPrintFilesJson', CommonFromPrintFilesJson);

module.exports = router;