var express = require('express');
var router = express.Router();
let CommonUsers = require("./Validate/Users");

router.use('/Users', CommonUsers);

module.exports = router;