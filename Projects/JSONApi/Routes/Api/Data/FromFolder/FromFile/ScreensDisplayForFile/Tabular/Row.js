var express = require('express');
var router = express.Router();
let CommonShow = require("./Row/Show");

router.use('/Show', CommonShow);

module.exports = router;