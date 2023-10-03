let express = require('express');
let router = express.Router();
let Controller = require("../../../controllers/Api/FromConfig/Controller.ColumnsAsArray");

router.get('/', Controller.getFunc);


module.exports = router;