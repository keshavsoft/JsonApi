var express = require('express');
var router = express.Router();
let CommonUpdate = require("./MainTable/Update");

router.use('/Update', CommonUpdate);

module.exports = router;