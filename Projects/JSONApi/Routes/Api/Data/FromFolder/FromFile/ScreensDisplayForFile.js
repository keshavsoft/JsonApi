var express = require('express');
var router = express.Router();
let CommonGetData = require("./ScreensDisplayForFile/GetData");
let CommonPullData = require("./ScreensDisplayForFile/PullData");
let CommonTabular = require("./ScreensDisplayForFile/Tabular");
let CommonVertical = require("./ScreensDisplayForFile/Vertical");

router.use('/GetData', CommonGetData);
router.use('/PullData', CommonPullData);
router.use('/Tabular', CommonTabular);
router.use('/Vertical',CommonVertical);

module.exports = router;