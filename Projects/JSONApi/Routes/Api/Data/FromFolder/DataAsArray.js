let express = require('express');
let router = express.Router();
let Controllers = require("../../../../controllers/Api/Data/FromFolder/Controllers.DataAsArray");

router.get('/', Controllers.getFunc);


module.exports = router;