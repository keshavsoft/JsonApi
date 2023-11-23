var express = require('express');
var router = express.Router();
let CommonAsIs = require("./SaveRow/AsIs");
let CommonAsIsWithTimeStamp = require("./SaveRow/AsIsWithTimeStamp");
let CommonWithPk = require("./SaveRow/WithPk");
let CommonWithPkTimeStamp = require("./SaveRow/WithPkTimeStamp");
let CommonWithPkTSImage = require("./SaveRow/WithPkTSImage");

router.use('/AsIs', CommonAsIs);
router.use('/AsIsWithTimeStamp', CommonAsIsWithTimeStamp);
router.use('/WithPk', CommonWithPk);
router.use('/WithPkTimeStamp', CommonWithPkTimeStamp);
router.use('/WithPkTSImage', CommonWithPkTSImage);

module.exports = router;