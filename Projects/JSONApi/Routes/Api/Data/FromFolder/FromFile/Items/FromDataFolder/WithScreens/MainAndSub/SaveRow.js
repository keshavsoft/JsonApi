var express = require('express');
var router = express.Router();
let CommonAsIs = require("./SaveRow/AsIs");
let CommonAsIsWithTimeStamp = require("./SaveRow/AsIsWithTimeStamp");
let CommonWithPk = require("./SaveRow/WithPk");
let CommonWithPkTimeStamp = require("./SaveRow/WithPkTimeStamp");

router.use('/AsIs', CommonAsIs);
router.use('/AsIsWithTimeStamp', CommonAsIsWithTimeStamp);
router.use('/WithPk', CommonWithPk);
router.use('/WithPkTimeStamp', CommonWithPkTimeStamp);

module.exports = router;