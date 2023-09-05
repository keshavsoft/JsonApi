let express = require("express");
let router = express.Router();

let Controllers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/FromJson.Controllers")
let Middleware = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/FromJson")

router.post("/", Middleware.FromJson, Controllers.FromJson);

module.exports = router;