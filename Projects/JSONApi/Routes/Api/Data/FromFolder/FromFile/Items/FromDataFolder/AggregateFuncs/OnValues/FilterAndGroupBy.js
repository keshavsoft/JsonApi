let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/FilterAndGroupBy")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/Controllers.FilterAndGroupBy");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;