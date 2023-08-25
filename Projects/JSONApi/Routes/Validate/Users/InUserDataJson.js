var express = require('express');
var router = express.Router();
let CommonForUserNameAndPassword = require("./InUserDataJson/ForUserNameAndPassword");
let CommonForCleaning = require("./InUserDataJson/ForCleaning");

router.use('/ForUserNameAndPassword', CommonForUserNameAndPassword);
router.use('/ForCleaning', CommonForCleaning);

module.exports = router;