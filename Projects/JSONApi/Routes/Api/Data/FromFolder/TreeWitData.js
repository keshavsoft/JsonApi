const express = require("express");
const router = express.Router();

let CommonControllers = require("../../../../controllers/Api/Data/FromFolder/TreeWitData.Controllers")

router.get('/', CommonControllers.GetFunc);

module.exports = router;
