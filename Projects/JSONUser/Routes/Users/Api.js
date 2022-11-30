var express = require('express');
var router = express.Router();
let CommonSetup = require("./Api/Setup");

router.use('/ShowData', require('./Api/ShowData'));
router.use('/Save', require('./Api/Save'));
router.use('/Setup', CommonSetup);

module.exports = router;