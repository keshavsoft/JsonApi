var express = require('express');
var router = express.Router();
let CommonWithFiltersAsArray = require("./WithFilters/AsArray");

router.use('/AsArray', CommonWithFiltersAsArray);

module.exports = router;