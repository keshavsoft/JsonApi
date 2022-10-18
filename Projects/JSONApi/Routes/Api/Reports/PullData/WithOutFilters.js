var express = require('express');
var router = express.Router();
let CommonAsTable = require("./WithOutFilters/AsTable");

router.use('/AsTable', CommonAsTable);

module.exports = router;