let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/LastMonth")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/LastMonth.controller");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;