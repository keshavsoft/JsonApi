var express = require('express');
var router = express.Router();

let CommonScreens = require("./Items/Screens");
let CommonImages = require("./Items/Images");

router.use('/Screens', CommonScreens);
router.use('/Images', CommonImages);

module.exports = router;