var express = require('express');
var router = express.Router();
let CommonUpdate = require("./MainTable/Update");
let CommonDelete = require("./MainTable/Delete");
let CommonSave = require("./MainTable/Save");
let CommonSaveWithPk = require("./MainTable/SaveWithPk");
let CommonSaveRow = require("./MainTable/SaveRow");

router.use('/Update', CommonUpdate);
router.use('/Delete', CommonDelete);
router.use('/Save', CommonSave);
router.use('/SaveWithPk', CommonSaveWithPk);
router.use('/SaveRow', CommonSaveRow);

module.exports = router;