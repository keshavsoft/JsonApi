let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainTable/SaveRow/AsIs")
let CommonControllers = require("../../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainTable/SaveRow/AsIs.Controller");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;