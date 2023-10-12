const express = require("express");
const router = express.Router();

let CommonControllers = require("../../../controllers/Api/FromConfig/Controller.TreeWitData")

router.get('/', CommonControllers.getFunc);

module.exports = router;
