var express = require('express');
var router = express.Router();
let CommonApiData = require("./Api/Data");
let CommonApiReports = require("./Api/Reports");
let CommonFromConfig = require("./Api/FromConfig");

router.use('/Data', CommonApiData);
router.use('/Reports', CommonApiReports);
router.use('/Preview', require("./Api/Preview"));
router.use('/FromConfig', CommonFromConfig);

module.exports = router;