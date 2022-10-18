var express = require('express');
var router = express.Router();
let CommonBulk = require("./Insert/Bulk");

router.use('/Bulk', CommonBulk);

module.exports = router;