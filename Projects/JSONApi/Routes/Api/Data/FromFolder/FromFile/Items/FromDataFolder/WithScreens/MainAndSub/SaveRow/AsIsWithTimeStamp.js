let express = require("express");
let router = express.Router();

let Middlewares = require("../../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainAndSub/SaveRow/AsIsWithTimeStamp")
let CommonControllers = require("../../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainAndSub/SaveRow/AsIsWithTimeStamp.Controllers");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;