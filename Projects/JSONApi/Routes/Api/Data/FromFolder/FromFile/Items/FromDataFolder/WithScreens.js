var express = require('express');
var router = express.Router();
let CommonAsTree = require("./WithScreens/AsTree");

router.use('/AsTree', CommonAsTree);

module.exports = router;