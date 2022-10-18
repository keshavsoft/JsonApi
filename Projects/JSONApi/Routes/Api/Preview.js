var express = require('express');
var router = express.Router();
let CommonForHtml = require("./Preview/ForHtml");

router.use('/ShowData', require('./Preview/ShowData'));
router.use('/ForHtml', CommonForHtml);

module.exports = router;