var express = require('express');
var router = express.Router();
let CommonWithCors = require("./Bulk/WithCors");

router.use('/WithCors', CommonWithCors);

module.exports = router;