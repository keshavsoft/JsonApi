var express = require('express');
var router = express.Router();
let CommonAsTree = require("./WithScreens/AsTree");
let CommonInsert = require("./WithScreens/Insert");

router.use('/AsTree', CommonAsTree);
router.use('/Insert', CommonInsert);

module.exports = router;