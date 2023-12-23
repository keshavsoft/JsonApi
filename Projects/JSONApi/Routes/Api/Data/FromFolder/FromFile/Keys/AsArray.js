let express = require('express');
let router = express.Router();
let CommonController = require("../../../../../../controllers/Api/Data/FromFolder/FromFile/Keys/getData.controller");
let CommonMiddlewares = require("../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Keys/AsArray");

router.post('/', CommonMiddlewares.PostFunc, CommonController.PostFunc)

module.exports = router;