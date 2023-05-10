let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking.controller");
let CommonMiddlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking");

router.post('/CreateNew', CommonMiddlewares.CreateNewFunc, CommonConrollers.CreateNewFunc);
router.post('/Insert', CommonConrollers.InsertFunc);
router.post('/InsertWithTimeStamp', CommonMiddlewares.InsertWithTimeStamp, CommonConrollers.InsertWithTimeStamp);
router.post('/', CommonConrollers.PostFunc);
router.delete('/', CommonConrollers.DeleteFunc);
router.patch('/', CommonConrollers.PatchFunc);
router.post('/InsertWithPk', CommonConrollers.InsertWithPkFunc);

module.exports = router;