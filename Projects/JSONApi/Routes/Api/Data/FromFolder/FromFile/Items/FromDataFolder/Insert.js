let express = require('express'); 
let router = express.Router();
let CommonController = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/insert.controller");
let middleware = require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert.PostFunc")

router.post('/', middleware.PostFunc, CommonController.PostFunc);

module.exports = router;