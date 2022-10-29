var express = require('express');
var router = express.Router();
let CommonForUserNameAndPassword = require("./InUserDataJson/ForUserNameAndPassword");

router.use('/ForUserNameAndPassword', CommonForUserNameAndPassword);

module.exports = router;