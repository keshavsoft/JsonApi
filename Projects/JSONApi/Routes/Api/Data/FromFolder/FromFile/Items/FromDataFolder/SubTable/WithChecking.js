let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
// let CommonConrollers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking.controller");
// let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking");
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/WithChecking.controller");
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/WithChecking");

//router.post('/', CommonConrollers.PostFunc);
router.post('/Insert',Middlewares.InsertFunc, CommonConrollers.InsertFunc);

// router.delete('/', CommonConrollers.DeleteFunc);
// router.patch('/', CommonConrollers.PatchFunc);

module.exports = router;