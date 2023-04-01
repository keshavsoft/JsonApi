var express = require('express');
var router = express.Router();

let CommonScreens = require("./Items/Screens");
let CommonImages = require("./Items/Images");
let CommonCustom = require("./Items/Custom");

router.use('/Screens', CommonScreens);
router.use('/Images', CommonImages);
router.use('/Custom', CommonCustom);

module.exports = router;