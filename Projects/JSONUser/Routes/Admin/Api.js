var express = require('express');
var router = express.Router();
let SubRouteCreate = require('./Api/Create');
let CommonCheck = require("./Api/Check");
let CommonInAdminDataJson = require("./Api/InAdminDataJson");

router.use('/Check', CommonCheck);
router.use('/InAdminDataJson', CommonInAdminDataJson);
router.use('/Create', SubRouteCreate);
router.use('/Email', require('./Api/Email'));

module.exports = router;