var express = require('express');
var router = express.Router();
let CommonSubTable = require("./SubTable/WithChecking");
let CommonUpdate = require("./SubTable/Update");
let CommonDelete = require("./SubTable/Delete");

router.use('/WithChecking', CommonSubTable);
router.use('/Update', CommonUpdate);
router.use('/Delete', CommonDelete);

module.exports = router;