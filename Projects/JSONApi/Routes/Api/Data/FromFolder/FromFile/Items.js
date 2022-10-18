var express = require('express');
var router = express.Router();
let CommonGetData = require("./Items/GetData");
let CommonScreens = require("./Items/Screens");
let CommonFromDataFolder = require("./Items/FromDataFolder");

router.use('/GetData', CommonGetData);
router.use('/Screens', CommonScreens);
router.use('/FromDataFolder', CommonFromDataFolder);

module.exports = router;