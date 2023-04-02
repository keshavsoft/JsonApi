var express = require('express');
var router = express.Router();
let CommonIsEqual = require("./ByColumn/IsEqual");

router.use('/IsEqual', CommonIsEqual);

module.exports = router;