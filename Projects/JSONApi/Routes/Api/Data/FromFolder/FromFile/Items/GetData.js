let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/GetData");
let commonMiddleWares = require("../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/GetData");
let CommonController = require("../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/getData.controller");

router.post('/', CommonController.PostFunc);

router.get('/AsArray', commonMiddleWares.AsArray, function (req, res, next) {
  //  console.log("------ : ", req.KeshavSoft);
  //let LocalUserName = req.KeshavSoft.kUserName;
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalJsonConfig = req.KeshavSoft.JsonConfig;

  // console.log("-----ppppp : ", req.KeshavSoft);
  Repos.AsArray({ inDataPk: LocalDataPk, inJsonConfig: LocalJsonConfig }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/AsArray', function (req, res, next) {
  let LocalDataPK;
  let LocalFolderName;
  let LocalFileName;

  if ("KeshavSoft" in req) {
    if ("DataPk" in req.KeshavSoft) {
      LocalDataPK = req.KeshavSoft.DataPk;

      if ("inFolderName" in req.body) {
        LocalFolderName = req.body.inFolderName;

        if ("inFileNameWithExtension" in req.body) {
          LocalFileName = req.body.inFileNameWithExtension;

          Repos.UsingFolderAndFile({
            inFolderName: LocalFolderName,
            inFileNameWithExtension: LocalFileName,
            inDataPK: LocalDataPK
          }).then(PromiseData => {
            res.json(PromiseData);
          });
        } else {
          res.json({ KTF: false, KReason: "Need to send inFileNameWithExtension" });
        };
      } else {
        res.json({ KTF: false, KReason: "Need to send inFolderName" });
      };
    } else {
      res.json({ KTF: false, KReason: "DataPk not found in Request.KeshavSoft" });
    };
  } else {
    res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
  };
});


module.exports = router;