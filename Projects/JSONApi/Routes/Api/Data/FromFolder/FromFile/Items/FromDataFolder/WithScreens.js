var express = require('express');
var router = express.Router();
let CommonAsTree = require("./WithScreens/AsTree");
let CommonInsert = require("./WithScreens/Insert");
let CommonWithChecking = require("./WithScreens/WithChecking");
let CommonSubTable = require("./WithScreens/SubTable");

router.use('/AsTree', CommonAsTree);
router.use('/Insert', CommonInsert);
router.use('/WithChecking', CommonWithChecking);
router.use('/SubTable', CommonSubTable);

module.exports = router;