var express = require('express');
var router = express.Router();

let CommonMenuWithFilters = require("./PullData/WithFilters");
let CommonMenuWithOutFilters = require("./PullData/WithOutFilters");
let CommonFromVouchersConsider = require("./PullData/FromVouchersConsider");

router.use('/WithFilters', CommonMenuWithFilters);
router.use('/WithOutFilters', CommonMenuWithOutFilters);
router.use('/FromVouchersConsider', CommonFromVouchersConsider);

module.exports = router;