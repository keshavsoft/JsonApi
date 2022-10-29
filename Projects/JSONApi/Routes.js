var express = require('express');
var router = express.Router();
let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
let CommonApi = require("./Routes/Api");
let CommonValidate = require('./Routes/Validate');


router.use('/Api', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonApi);
router.use('/Validate', CommonValidate);


module.exports = router;