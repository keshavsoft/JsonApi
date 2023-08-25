var express = require('express');
var router = express.Router();
let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
let CommonApi = require("./Routes/Api");
let CommonValidate = require('./Routes/Validate');
let CommonJwt= require("../../common/Jwt/ForLogin/UserCredentials");

router.use('/Api', CommonJwt.ForKeshavSoftRedirectToLogin, CommonApi);
router.use('/Validate', CommonValidate);

module.exports = router;