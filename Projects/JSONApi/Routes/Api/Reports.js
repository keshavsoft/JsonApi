var express = require("express");
var router = express.Router();
let CommonReportsMenu = require("./Reports/Menu");
let CommonPullData = require("./Reports/PullData");
let CommonFilters = require("./Reports/Filters");

router.use("/Menu", CommonReportsMenu);
router.use("/PullData", CommonPullData);
router.use("/Filters", CommonFilters);

module.exports = router;
