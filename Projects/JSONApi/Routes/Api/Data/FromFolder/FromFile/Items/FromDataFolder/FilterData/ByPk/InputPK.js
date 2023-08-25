let express = require('express');
let router = express.Router();

let CommonController = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK.controller");
// let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK")

router.post('/', CommonController.PostFunc);

module.exports = router;