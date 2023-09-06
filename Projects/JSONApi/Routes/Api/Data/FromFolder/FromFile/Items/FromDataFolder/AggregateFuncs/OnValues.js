var express = require('express');
var router = express.Router();
let CommonFilter = require("./OnValues/Filter");
let CommonGroupBy = require("./OnValues/GroupBy");

router.use('/Filter', CommonFilter);
router.use('/GroupBy', CommonGroupBy);

module.exports = router;