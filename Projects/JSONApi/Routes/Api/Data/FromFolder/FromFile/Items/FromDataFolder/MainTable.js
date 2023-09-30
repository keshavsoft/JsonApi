var express = require('express');
var router = express.Router();
let CommonUpdate = require("./MainTable/Update");
let CommonDelete = require("./MainTable/Delete");

router.use('/Update', CommonUpdate);
router.use('/Delete', CommonDelete);

module.exports = router;