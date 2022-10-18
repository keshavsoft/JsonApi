var express = require('express');
var router = express.Router();

let CommonRow = require("./Body/Row");

router.use('/Row', CommonRow);

module.exports = router;