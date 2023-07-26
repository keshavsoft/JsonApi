let express = require('express');
let router = express.Router();
let Middlewares = require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK");
let CommonConrollers = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK.controller");

router.post('/', Middlewares.PostFunc, CommonConrollers.PostFunc);

module.exports = router;