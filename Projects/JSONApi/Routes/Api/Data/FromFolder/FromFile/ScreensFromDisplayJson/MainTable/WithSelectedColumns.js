let express = require('express');
let router = express.Router();
let CommonControllers = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns.controllers");
let CommonMiddleWares = require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns");

router.post('/', CommonMiddleWares.WithConfig, CommonControllers.WithConfig)

module.exports = router;