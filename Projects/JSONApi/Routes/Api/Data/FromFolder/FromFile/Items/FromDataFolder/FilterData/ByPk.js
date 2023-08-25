var express = require('express');
var router = express.Router();
let CommonInputPK = require("./ByPk/InputPK");

router.use('/InputPK', CommonInputPK);

module.exports = router;