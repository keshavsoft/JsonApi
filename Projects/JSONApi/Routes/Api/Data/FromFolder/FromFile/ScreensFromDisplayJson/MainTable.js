var express = require('express');
var router = express.Router();

let CommonFooter = require("./MainTable/Footer");
let CommonRow = require("./MainTable/Row");
let CommonWithSelectedColumns = require("./MainTable/WithSelectedColumns");

router.use('/Footer', CommonFooter);
router.use('/Row', CommonRow);
router.use('/WithSelectedColumns', CommonWithSelectedColumns);

module.exports = router;