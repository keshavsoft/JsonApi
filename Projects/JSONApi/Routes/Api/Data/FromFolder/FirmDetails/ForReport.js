let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../Repository/Api/Data/FromFolder/FromFile/GetFiles");
let CommonFromControllers = require("../../../../../controllers/Api/Data/FromFolder/FirmDetails/ForReport");

// router.get('/', function (req, res, next) {
//   let LocalDataPk = req.KeshavSoft.DataPk;
//   let LocalFolderName = req.KeshavSoft.JsonConfig.inFolderName;

//   Repos.AsArray({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
//     res.end(JSON.stringify(PromiseData));
//   });
// });

router.get('/', CommonFromControllers.GetFunc);

module.exports = router;