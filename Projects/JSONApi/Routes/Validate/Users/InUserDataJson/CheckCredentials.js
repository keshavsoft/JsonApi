let express = require("express");
let router = express.Router();

let Controllers = require("../../../../controllers/Validate/Users/InUserDataJson/Credentials.Controllers")
let CommonMiddlewares = require("../../../../Middlewares/Validate/Users/InUserDataJson/CheckCredentials")

router.post('/', CommonMiddlewares.PostFunc, Controllers.PostFunc);


module.exports = router;