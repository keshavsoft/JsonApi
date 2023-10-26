var express = require('express');
var router = express.Router();
let CommonGetData = require("./Screens/GetData");
let CommonMainTable = require("./Screens/MainTable");

router.use('/GetData', CommonGetData);
router.use('/MainTable', CommonMainTable);

module.exports = router;