let express = require('express');
let router = express.Router();
let CommonController = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual.controller");
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual")
router.post('/', Middlewares.PostFunc, CommonController.PostFunc);

module.exports = router;