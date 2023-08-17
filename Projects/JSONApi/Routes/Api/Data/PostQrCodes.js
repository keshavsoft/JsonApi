var express = require('express');
var router = express.Router();
let CommonPostQrCodes = require("./PostQrCodes/Maguva");
let CommonPostQrCodesWashtex = require("./PostQrCodes/Washtex");

router.use('/Maguva', CommonPostQrCodes);
router.use('/Washtex', CommonPostQrCodesWashtex);

module.exports = router;