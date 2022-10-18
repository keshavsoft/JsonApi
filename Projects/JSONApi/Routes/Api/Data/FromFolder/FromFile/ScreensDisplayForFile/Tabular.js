var express = require('express');
var router = express.Router();
let CommonRow = require("./Tabular/Row");

router.use('/Row', CommonRow);

module.exports = router;