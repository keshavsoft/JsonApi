var express = require('express');
var router = express.Router();
let CommonMenuWithFilters = require("./Menu/WithFilters");
let CommonMenuWithOutFilters = require("./Menu/WithOutFilters");

router.use('/WithFilters', CommonMenuWithFilters);
router.use('/WithOutFilters', CommonMenuWithOutFilters);

module.exports = router;