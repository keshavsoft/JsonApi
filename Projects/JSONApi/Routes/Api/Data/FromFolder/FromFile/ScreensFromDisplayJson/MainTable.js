var express = require('express');
var router = express.Router();

let CommonFooter = require("./MainTable/Footer");
let CommonRow = require("./MainTable/Row");


router.use('/Footer', CommonFooter);
router.use('/Row', CommonRow);


module.exports = router;