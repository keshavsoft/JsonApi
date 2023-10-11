var express = require('express');
var router = express.Router();
let CommonAsTree = require("./WithScreens/AsTree");
let CommonInsert = require("./WithScreens/Insert");
let CommonWithChecking = require("./WithScreens/WithChecking");
let CommonSubTable = require("./WithScreens/SubTable");
let CommonMainTable = require("./WithScreens/MainTable");

router.use('/AsTree', CommonAsTree);
router.use('/Insert', CommonInsert);
router.use('/WithChecking', CommonWithChecking);
router.use('/SubTable', CommonSubTable);
router.use('/MainTable', CommonMainTable);

module.exports = router;