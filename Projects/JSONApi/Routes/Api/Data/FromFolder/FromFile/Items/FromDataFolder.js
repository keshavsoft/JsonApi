var express = require('express');
var router = express.Router();
let CommonNoConfig = require("./FromDataFolder/NoConfig");
let CommonWithScreens = require("./FromDataFolder/WithScreens");
let CommonWithGetData = require("./FromDataFolder/GetData");
let CommonWithInsert = require("./FromDataFolder/Insert");


router.use('/NoConfig', CommonNoConfig);
router.use('/WithScreens', CommonWithScreens);
router.use('/GetData', CommonWithGetData);
router.use('/Insert', CommonWithInsert);

module.exports = router;