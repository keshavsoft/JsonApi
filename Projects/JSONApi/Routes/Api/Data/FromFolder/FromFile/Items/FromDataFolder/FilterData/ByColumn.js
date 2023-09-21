var express = require('express');
var router = express.Router();
let CommonIsEqual = require("./ByColumn/IsEqual");
let CommonFilterAsArray = require("./ByColumn/FilterAsArray");

router.use('/IsEqual', CommonIsEqual);
router.use('/FilterAsArray', CommonFilterAsArray);

module.exports = router;