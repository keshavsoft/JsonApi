var express = require('express');
var router = express.Router();
let CommonFilter = require("./OnValues/Filter");
let CommonGroupBy = require("./OnValues/GroupBy");
let CommonFilterAndGroupBy = require("./OnValues/FilterAndGroupBy");
let CommonFilterAsArray = require("./OnValues/FilterAsArray");

router.use('/Filter', CommonFilter);
router.use('/GroupBy', CommonGroupBy);
router.use('/FilterAndGroupBy', CommonFilterAndGroupBy);
router.use('/FilterAsArray', CommonFilterAsArray);

module.exports = router;