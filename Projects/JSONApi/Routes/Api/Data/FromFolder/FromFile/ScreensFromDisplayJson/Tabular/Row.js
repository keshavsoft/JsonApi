var express = require('express');
var router = express.Router();
let CommonShow = require("./Row/Show");
let CommonDelete = require("./Row/Delete");

router.use('/Show', CommonShow);
router.use('/Delete', CommonDelete);

module.exports = router;