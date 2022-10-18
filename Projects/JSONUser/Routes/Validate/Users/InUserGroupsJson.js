var express = require('express');
var router = express.Router();
let CommonForUserNamePasswordFirm = require("./InUserGroupsJson/ForUserNamePasswordFirm");

router.use('/ForUserNamePasswordFirm', CommonForUserNamePasswordFirm);

module.exports = router;