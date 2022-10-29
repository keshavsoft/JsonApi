var express = require('express');
var router = express.Router();

let CommonPullData = require("./ScreensFromDisplayJson/PullData");
let CommonTabular = require("./ScreensFromDisplayJson/Tabular");
let CommonVertical = require("./ScreensFromDisplayJson/Vertical");
let CommonItems = require("./ScreensFromDisplayJson/Items");
let CommonSubTable = require("./ScreensFromDisplayJson/SubTable");
let CommonMainTable = require("./ScreensFromDisplayJson/MainTable");
let CommonPullDataFuncs = require("./ScreensFromDisplayJson/PullDataFuncs");


router.use('/PullData', CommonPullData);
router.use('/Tabular', CommonTabular);
router.use('/Vertical',CommonVertical);
router.use('/Items',CommonItems);
router.use('/SubTable', CommonSubTable);
router.use('/MainTable', CommonMainTable);
router.use('/PullDataFuncs', CommonPullDataFuncs);



module.exports = router;