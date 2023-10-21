var express = require('express');
var router = express.Router();
let CommonTotalCount = require("./WithFilter/TotalCount");

router.use('/TotalCount', CommonTotalCount);

module.exports = router;