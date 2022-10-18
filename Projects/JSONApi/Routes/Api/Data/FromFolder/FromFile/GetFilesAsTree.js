var express = require('express');
var router = express.Router();
let CommonWithScreens = require("./GetFilesAsTree/WithScreens");
let CommonWithItemAndScreenCount=require("./GetFilesAsTree/WithItemAndScreenCount");

router.use('/WithScreens', CommonWithScreens);
router.use('/WithItemAndScreenCount', CommonWithItemAndScreenCount);

module.exports = router;