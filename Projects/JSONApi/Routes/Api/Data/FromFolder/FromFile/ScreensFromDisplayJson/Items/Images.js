var express = require('express');
var router = express.Router();

let CommonSave = require("./Images/Save");
let CommonShow = require("./Images/Show");
let CommonDelete = require("./Images/Delete");

router.use('/Save', CommonSave);
router.use('/Show', CommonShow);
router.use('/Delete', CommonDelete);

module.exports = router;