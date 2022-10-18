var express = require('express');
var router = express.Router();
let CommonSave = require("./Footer/Save");
let CommonKeyPress = require("./Footer/KeyPress");

router.use('/Save', CommonSave);
router.use('/KeyPress', CommonKeyPress);

module.exports = router;