var express = require('express');
var router = express.Router();
let CommonMax = require("./OnKeys/Max");
let CommonMin = require("./OnKeys/Min");
let CommonLastMonth = require("./OnKeys/LastMonth");
let CommonLastWeek = require("./OnKeys/LastWeek");
let CommonPreviousDay = require("./OnKeys/PreviousDay");
let CommonTodayCount = require("./OnKeys/TodayCount");
let CommonTotalCount = require("./OnKeys/TotalCount");

router.use('/Max', CommonMax);
router.use('/Min', CommonMin);
router.use('/LastMonth', CommonLastMonth);
router.use('/LastWeek', CommonLastWeek);
router.use('/PreviousDay', CommonPreviousDay);
router.use('/TodayCount', CommonTodayCount);
router.use('/TotalCount', CommonTotalCount);

module.exports = router;