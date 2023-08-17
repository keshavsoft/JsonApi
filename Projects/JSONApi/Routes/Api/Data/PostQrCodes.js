var express = require('express');
var router = express.Router();
let CommonPostQrCodes = require("./PostQrCodes/Maguva");

router.use('/Maguva', CommonPostQrCodes);

module.exports = router;