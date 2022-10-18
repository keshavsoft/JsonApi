var express = require('express');
var router = express.Router();
let CommonApiData = require("./Api/Data");
let CommonApiReports = require("./Api/Reports");

router.use('/Data', CommonApiData);
router.use('/Reports', CommonApiReports);
router.use('/Preview', require("./Api/Preview"));

module.exports = router;