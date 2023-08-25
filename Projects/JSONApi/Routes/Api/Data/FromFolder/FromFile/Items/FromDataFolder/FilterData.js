var express = require('express');
var router = express.Router();
let CommonByColumn = require("./FilterData/ByColumn");
let CommonByPk = require("./FilterData/ByPk");

router.use('/ByColumn', CommonByColumn);
router.use('/ByPk', CommonByPk);

module.exports = router;