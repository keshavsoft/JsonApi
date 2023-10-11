let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPk")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPk.Controllers");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;