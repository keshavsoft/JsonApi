var express = require('express');
var router = express.Router();
let CommonNoConfig = require("./FromDataFolder/NoConfig");
let CommonWithScreens = require("./FromDataFolder/WithScreens");
//let CommonWithGetData = require("./FromDataFolder/GetData");
let CommonWithInsert = require("./FromDataFolder/Insert");
let CommonAsArrayWithPK = require("./FromDataFolder/AsArrayWithPK");
let CommonRowData = require("./FromDataFolder/RowData");
let CommonFilterData = require("./FromDataFolder/FilterData");
let CommonAsObjectWithPK = require("./FromDataFolder/AsObjectWithPK");
let CommonAsSubTable = require("./FromDataFolder/SubTable");
let CommonAsMainTable = require("./FromDataFolder/MainTable");
let CommonAggregateFuncs = require("./FromDataFolder/AggregateFuncs");

router.use('/NoConfig', CommonNoConfig);
router.use('/WithScreens', CommonWithScreens);
//router.use('/GetData', CommonWithGetData);
router.use('/Insert', CommonWithInsert);
router.use('/AsArrayWithPK', CommonAsArrayWithPK);
router.use('/RowData', CommonRowData);
router.use('/FilterData', CommonFilterData);
router.use('/AsObjectWithPK', CommonAsObjectWithPK);
router.use('/SubTable', CommonAsSubTable);
router.use('/MainTable', CommonAsMainTable);
router.use('/AggregateFuncs', CommonAggregateFuncs);


module.exports = router;