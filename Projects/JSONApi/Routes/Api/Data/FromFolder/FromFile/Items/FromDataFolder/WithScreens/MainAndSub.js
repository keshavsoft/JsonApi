var express = require('express');
var router = express.Router();

let CommonSaveRow = require("./MainAndSub/SaveRow");

router.use('/SaveRow', CommonSaveRow);

module.exports = router;