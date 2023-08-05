var express = require('express');
var router = express.Router();
let CommonSubTable = require("./SubTable/WithChecking");

router.use('/WithChecking', CommonSubTable);

module.exports = router;