var express = require('express');
var router = express.Router();

let CommonScreens = require("./Items/Screens");

router.use('/Screens', CommonScreens);

module.exports = router;