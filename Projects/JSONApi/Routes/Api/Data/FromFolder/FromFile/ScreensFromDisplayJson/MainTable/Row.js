var express = require('express');
var router = express.Router();

let CommonDelete = require("./Row/Delete");

router.use('/Delete', CommonDelete);

module.exports = router;