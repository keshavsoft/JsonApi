var express = require('express');
var router = express.Router();
let CommonFilter = require("./OnValues/Filter");
let CommonGroupBy = require("./OnValues/GroupBy");
let CommonFilterAsArray = require("./OnValues/FilterAsArray");

router.use('/Filter', CommonFilter);
router.use('/GroupBy', CommonGroupBy);
router.use('/FilterAsArray', CommonFilterAsArray);

module.exports = router;