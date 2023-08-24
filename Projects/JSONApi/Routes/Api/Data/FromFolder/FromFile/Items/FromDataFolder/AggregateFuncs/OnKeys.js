var express = require('express');
var router = express.Router();
let CommonMax = require("./OnKeys/Max");
let CommonMin = require("./OnKeys/Min");

router.use('/Max', CommonMax);
router.use('/Min', CommonMin);

module.exports = router;