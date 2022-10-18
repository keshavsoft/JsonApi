var express = require('express');
var router = express.Router();
//let SubRouteCreate = require('./Api/Create');
let CommonCheck = require("./InAdminDataJson/Check");

router.use('/Check', CommonCheck);

// router.use('/Create', SubRouteCreate);
// router.use('/Email', require('./Api/Email'));

module.exports = router;