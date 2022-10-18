var express = require('express');
var router = express.Router();
let CommonFromJson = require("./HtmlCreate/FromJson");

router.use('/Fromjson',CommonFromJson);

module.exports = router;