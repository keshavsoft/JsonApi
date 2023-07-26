let express = require('express');
let router = express.Router();
let Middlewares = require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
let CommonConrollers = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK.controller");

router.post('/', Middlewares.PostFunc, CommonConrollers.PostFunc);

module.exports = router;