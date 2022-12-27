let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
let CommonConrollers = require("../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData.controller");

router.post('/', CommonConrollers.PostFunc);

module.exports = router;