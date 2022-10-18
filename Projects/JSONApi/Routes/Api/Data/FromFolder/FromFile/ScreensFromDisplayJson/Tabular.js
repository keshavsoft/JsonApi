var express = require('express');
var router = express.Router();
let CommonRow = require("./Tabular/Row");
let CommonFooter = require("./Tabular/Footer");
let CommonPopUp = require("./Tabular/PopUp");

router.use('/Row', CommonRow);
router.use('/Footer', CommonFooter);
router.use('/PopUp', CommonPopUp);

module.exports = router;