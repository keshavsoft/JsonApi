var express = require('express');
var router = express.Router();
let CommonForUserNamePasswordFirm = require("./InUserGroupsJson/ForUserNamePasswordFirm");
let CommonCheckForUserNamePasswordFirm = require("./InUserGroupsJson/CheckForUserNamePasswordFirm");

router.use('/ForUserNamePasswordFirm', CommonForUserNamePasswordFirm);
router.use('/CheckForUserNamePasswordFirm', CommonCheckForUserNamePasswordFirm);

module.exports = router;