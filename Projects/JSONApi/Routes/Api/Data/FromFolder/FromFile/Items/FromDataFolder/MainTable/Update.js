let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Update")
let CommonControllers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Update.controller");

router.post('/Update',Middlewares.UpdateFunc, CommonControllers.UpdateFunc);

module.exports = router;