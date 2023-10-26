let express = require('express');
let router = express.Router();
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/Screens/MainTable/AsArray");
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/Screens/MainTable/AsArray.Controllers");

router.post('/', Middlewares.PostFunc, CommonConrollers.PostFunc);

module.exports = router;