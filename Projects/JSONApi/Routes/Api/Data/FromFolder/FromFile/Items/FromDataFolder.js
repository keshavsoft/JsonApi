var express = require('express');
var router = express.Router();
let CommonNoConfig = require("./FromDataFolder/NoConfig");
let CommonWithScreens = require("./FromDataFolder/WithScreens");
//let CommonWithGetData = require("./FromDataFolder/GetData");
let CommonWithInsert = require("./FromDataFolder/Insert");
let CommonAsArrayWithPK = require("./FromDataFolder/AsArrayWithPK");
let CommonRowData = require("./FromDataFolder/RowData");
let CommonFilterData = require("./FromDataFolder/FilterData");

router.use('/NoConfig', CommonNoConfig);
router.use('/WithScreens', CommonWithScreens);
//router.use('/GetData', CommonWithGetData);
router.use('/Insert', CommonWithInsert);
router.use('/AsArrayWithPK', CommonAsArrayWithPK);
router.use('/RowData', CommonRowData);
router.use('/FilterData', CommonFilterData);

module.exports = router;