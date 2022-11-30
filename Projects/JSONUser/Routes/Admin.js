var express = require('express');
var router = express.Router();
let SubRouteApi = require("./Admin/Api");

router.use('/Api', SubRouteApi);

module.exports = router;