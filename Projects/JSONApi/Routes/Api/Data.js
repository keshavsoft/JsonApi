var express = require('express');
var router = express.Router();
let CommonFromFolder = require("./Data/FromFolder");

router.use('/Masters', require('./Data/Masters'));
router.use('/FromFolder', CommonFromFolder);

module.exports = router;