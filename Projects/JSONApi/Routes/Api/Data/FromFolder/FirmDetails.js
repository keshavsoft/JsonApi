var express = require('express');
var router = express.Router();
let CommonFirmDetails = require("./FirmDetails/ForReport");

router.use('/ForReport', CommonFirmDetails);

module.exports = router;