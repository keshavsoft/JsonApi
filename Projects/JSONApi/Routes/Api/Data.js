var express = require('express');
var router = express.Router();
let CommonFromFolder = require("./Data/FromFolder");
let CommonPostQrCodes = require("./Data/PostQrCodes");

router.use('/Masters', require('./Data/Masters'));
router.use('/FromFolder', CommonFromFolder);
router.use('/PostQrCodes', CommonPostQrCodes);

module.exports = router;