let express = require('express');
let router = express.Router();
let controllers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Delete.controller");

router.post('/', controllers.WithPK);

module.exports = router;