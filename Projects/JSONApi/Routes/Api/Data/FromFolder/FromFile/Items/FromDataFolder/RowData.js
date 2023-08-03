let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
let CommonConrollers = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData.controller");
let Middleware=require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData")

router.post('/', Middleware.PostFunc ,CommonConrollers.PostFunc);
router.delete('/', CommonConrollers.DeleteFunc);
router.patch('/', CommonConrollers.PatchFunc);

module.exports = router;