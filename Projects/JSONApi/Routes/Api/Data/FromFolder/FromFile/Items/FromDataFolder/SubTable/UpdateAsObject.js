let express = require("express");
let router = express.Router();
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Update.controller");

router.post('/' ,CommonConrollers.WithPK);

module.exports = router;