var express = require('express');
var router = express.Router();
let CommonUpdate = require("./MainTable/Update");
let CommonDelete = require("./MainTable/Delete");
let CommonSave = require("./MainTable/Save");
let CommonSaveWithPk = require("./MainTable/SaveWithPk");

router.use('/Update', CommonUpdate);
router.use('/Delete', CommonDelete);
router.use('/Save', CommonSave);
router.use('/SaveWithPk', CommonSaveWithPk);

module.exports = router;