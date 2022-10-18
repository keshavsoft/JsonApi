var express = require('express');
var router = express.Router();
let CommonFromJson = require("./HtmlCreate/FromJson");
let CommonFromSave = require("./HtmlCreate/Save");
let CommonUpdate = require("./HtmlCreate/Update");

router.use('/Fromjson', CommonFromJson);
router.use('/Save', CommonFromSave);
router.use("/Update", CommonUpdate);

module.exports = router;