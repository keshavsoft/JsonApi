var express = require('express');
var router = express.Router();
let CommonWithChecking = require("./SubTable/WithChecking");

router.use('/WithChecking', CommonWithChecking);

module.exports = router;