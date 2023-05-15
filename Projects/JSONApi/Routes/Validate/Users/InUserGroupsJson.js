var express = require('express');
var router = express.Router();
let CommonForUserNameAndPassword = require("./InUserGroupsJson/ForUserNameAndPassword");

router.use('/ForUserNameAndPassword', CommonForUserNameAndPassword);

module.exports = router;