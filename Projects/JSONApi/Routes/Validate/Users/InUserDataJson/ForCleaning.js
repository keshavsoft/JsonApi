let express = require("express");
let router = express.Router();

let CommonControllers = require("../../../../controllers/Validate/Users/InUserDataJson/ForCleaning.Controllers")
let CommonMiddlewares = require("../../../../Middlewares/Validate/Users/InUserDataJson/ForCleaning")

router.post('/TokenToCookie', CommonMiddlewares.TokenToCookieFirmDetailsAlso, CommonControllers.TokenToCookie);

module.exports = router;