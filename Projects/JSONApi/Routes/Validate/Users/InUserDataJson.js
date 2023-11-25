var express = require('express');
var router = express.Router();
let CommonForUserNameAndPassword = require("./InUserDataJson/ForUserNameAndPassword");
let CommonForCleaning = require("./InUserDataJson/ForCleaning");
let CommonCheckCredentials = require("./InUserDataJson/CheckCredentials");

router.use('/ForUserNameAndPassword', CommonForUserNameAndPassword);
router.use('/ForCleaning', CommonForCleaning);
router.use('/CheckCredentials', CommonCheckCredentials);

module.exports = router;