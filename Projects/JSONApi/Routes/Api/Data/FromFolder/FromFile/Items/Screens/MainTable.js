var express = require('express');
var router = express.Router();
let CommonAsArray = require("./MainTable/AsArray");

router.use('/AsArray', CommonAsArray);

module.exports = router;