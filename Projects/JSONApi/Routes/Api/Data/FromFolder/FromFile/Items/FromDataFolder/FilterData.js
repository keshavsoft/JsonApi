var express = require('express');
var router = express.Router();
let CommonByColumn = require("./FilterData/ByColumn");

router.use('/ByColumn', CommonByColumn);

module.exports = router;