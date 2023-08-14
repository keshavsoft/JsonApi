let express = require("express");
let router = express.Router();
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/UpdateAsObject.controller");
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/UpdateAsObject")
router.post('/', Middlewares.WithPK, CommonConrollers.WithPK);

module.exports = router;