var express = require('express');
var router = express.Router();

let CommonWithImage = require("./RowDatas/WithImage");

router.use('/WithImage', CommonWithImage);

module.exports = router;