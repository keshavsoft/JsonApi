var express = require('express');
var router = express.Router();
let CommonPostQrCodes = require("./PostQrCodes/Maguva");
let CommonPostQrCodesWashtex = require("./PostQrCodes/Washtex");
let CommonCleaning = require("./PostQrCodes/Cleaning");

router.use('/Maguva', CommonPostQrCodes);
router.use('/Washtex', CommonPostQrCodesWashtex);
router.use('/Cleaning', CommonCleaning);

module.exports = router;