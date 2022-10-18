var express = require('express');
var router = express.Router();
let CommonGetData = require("./Screens/GetData");

router.use('/GetData', CommonGetData);

module.exports = router;