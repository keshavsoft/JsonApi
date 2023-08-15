let express = require('express');
let router = express.Router();
let CommonControllers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Delete.controller");
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Delete")

router.post('/', Middlewares.WithPK, CommonControllers.WithPK);

module.exports = router;