let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/FilterAsArray")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/Controllers.FilterAsArray");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;