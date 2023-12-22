let express = require('express');
let router = express.Router();
let CommonController = require("../../../../../../controllers/Api/Data/FromFolder/FromFile/Keys/getData.controller");

router.post('/', CommonController.PostFunc)

module.exports = router;