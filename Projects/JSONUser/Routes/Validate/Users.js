var express = require('express');
var router = express.Router();
let CommonInUserDataJson = require("./Users/InUserDataJson");
let CommonInUserGroupsJson = require("./Users/InUserGroupsJson");

router.use('/InUserDataJson', CommonInUserDataJson);
router.use('/InUserGroupsJson', CommonInUserGroupsJson);

module.exports = router;