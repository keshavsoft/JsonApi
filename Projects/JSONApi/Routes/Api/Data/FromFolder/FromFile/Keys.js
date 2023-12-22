var express = require('express');
var router = express.Router();
let CommonAsArray = require("./Keys/AsArray");

router.use('/AsArray', CommonAsArray);

module.exports = router;