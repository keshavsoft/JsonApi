var express = require('express');
var router = express.Router();

let CommonBody = require("./SubTable/Body");
let CommonPopUp = require("./SubTable/PopUp");
let CommonFooter = require("./SubTable/Footer");
let CommonRow = require("./SubTable/Row");

router.use('/Body', CommonBody);
router.use('/PopUp', CommonPopUp);
router.use('/Footer', CommonFooter);
router.use('/Row', CommonRow);

module.exports = router;