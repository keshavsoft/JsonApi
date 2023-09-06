var express = require('express');
var router = express.Router();
let CommonFilter = require("./OnValues/Filter");

router.use('/Filter', CommonFilter);

module.exports = router;