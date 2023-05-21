var express = require('express');
var router = express.Router();
let CommonFromJson = require("./HtmlCreate/FromJson");
let CommonFromSave = require("./HtmlCreate/Save");
let CommonUpdate = require("./HtmlCreate/Update");
let CommonFromVerticalToShow = require("./HtmlCreate/VerticalToShow");

router.use('/Fromjson', CommonFromJson);
router.use('/Save', CommonFromSave);
router.use("/Update", CommonUpdate);
router.use('/VerticalToShow', CommonFromVerticalToShow);

module.exports = router;