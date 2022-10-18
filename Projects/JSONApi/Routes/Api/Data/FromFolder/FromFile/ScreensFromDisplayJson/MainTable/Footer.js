var express = require('express');
var router = express.Router();

let CommonSave = require("./Footer/Save");

router.use('/Save', CommonSave);

module.exports = router;