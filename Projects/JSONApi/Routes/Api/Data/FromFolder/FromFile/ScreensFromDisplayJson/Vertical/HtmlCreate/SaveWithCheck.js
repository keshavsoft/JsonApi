let express = require("express");
let router = express.Router();
let Controllers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/SaveWithCheck.Controllers")
let Middleware = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/SaveWithCheck")

router.post("/", Middleware.CheckAndSave, Controllers.CheckAndSave);

module.exports = router;