var express = require('express');
var router = express.Router();
let CommonGetDirs = require("./FromFolder/GetDirs");
let CommonFromFile = require("./FromFolder/FromFile");

router.use('/GetDirs', CommonGetDirs);
router.use('/FromFile', CommonFromFile);

module.exports = router;