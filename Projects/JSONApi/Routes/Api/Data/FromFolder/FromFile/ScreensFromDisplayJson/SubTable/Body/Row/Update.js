let express = require("express");
let router = express.Router();
let CommonConrollers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update.controller");
let Middleware=require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update");

router.post('/', Middleware.WithPK ,CommonConrollers.WithPK);

module.exports = router;