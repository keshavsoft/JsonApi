var express = require('express');
var router = express.Router();
let CommonSubTable = require("./SubTable/WithChecking");
let CommonUpdate = require("./SubTable/Update");

router.use('/WithChecking', CommonSubTable);
router.use('/Update', CommonUpdate);

module.exports = router;