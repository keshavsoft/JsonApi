var express = require('express');
var router = express.Router();
let CommonGetFiles = require("./FromFile/GetFiles");
let CommonItems = require("./FromFile/Items");
let CommonScreensDisplayForFile = require("./FromFile/ScreensDisplayForFile");
let CommonItemsDisplayForFile = require("./FromFile/ItemsDisplayForFile");
let CommonInsert = require("./FromFile/Insert");
let CommonScreensFromDisplayJson = require("./FromFile/ScreensFromDisplayJson");
let CommonGetFilesAsTree = require("./FromFile/GetFilesAsTree");

router.use('/GetFiles', CommonGetFiles);
router.use('/Items', CommonItems);
router.use('/ScreensDisplayForFile', CommonScreensDisplayForFile);
router.use('/ItemsDisplayForFile', CommonItemsDisplayForFile);
router.use('/Insert', CommonInsert);
router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);
router.use('/GetFilesAsTree', CommonGetFilesAsTree);

module.exports = router;