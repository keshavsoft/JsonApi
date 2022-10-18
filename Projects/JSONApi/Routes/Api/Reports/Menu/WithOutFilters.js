var express = require('express');
var router = express.Router();
let CommonWithFiltersAsArray = require("./WithOutFilters/AsArray");


router.use('/AsArray', CommonWithFiltersAsArray);

module.exports = router;