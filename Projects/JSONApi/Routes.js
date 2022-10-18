var express = require('express');
var router = express.Router();
let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
let CommonApi = require("./Routes/Api");

router.use('/Api', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonApi);

module.exports = router;