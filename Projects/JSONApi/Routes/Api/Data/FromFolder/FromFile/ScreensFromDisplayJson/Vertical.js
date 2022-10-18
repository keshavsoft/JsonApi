var express = require('express');
var router = express.Router();
let CommonHtmlCreate = require("./Vertical/HtmlCreate");

router.use('/HtmlCreate',CommonHtmlCreate);

module.exports = router;