let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/Screens/GetData");

router.get('/AsArray', function (req, res, next) {
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFoldername = req.KeshavSoft.JsonConfig.inFolderName;
  let LocalFileNameWithExtension = req.KeshavSoft.JsonConfig.inJsonFileName;
  let LocalItemName = req.KeshavSoft.ItemConfig.inItemName;

  Repos.AsArray({
    inDataPk: LocalDataPk, inFolderName: LocalFoldername,
    inFileNameWithExtension: LocalFileNameWithExtension,
    inItemName: LocalItemName
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/AsArrayOfObjects', function (req, res, next) {
  let LocalDataPK;
  let LocalFolderName;
  let LocalFileName;
  let LocalItemName;

  if (("KeshavSoft" in req) === false) {
    res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
  };

  if ("DataPk" in req.KeshavSoft) {
    LocalDataPK = req.KeshavSoft.DataPk;
  } else {
    res.json({ KTF: false, KReason: "DataPk not found in Request.KeshavSoft" });
  };

  if ("inFolderName" in req.body) {
    LocalFolderName = req.body.inFolderName;
  } else {
    res.json({ KTF: false, KReason: "Need to send inFolderName" });
  };

  if ("inFileNameWithExtension" in req.body) {
    LocalFileName = req.body.inFileNameWithExtension;
  } else {
    res.json({ KTF: false, KReason: "Need to send inFileNameWithExtension" });
  };

  if ("inItemName" in req.body) {
    LocalItemName = req.body.inItemName;

    Repos.AsArrayOfObjects({
      inFolderName: LocalFolderName,
      inFileNameWithExtension: LocalFileName,
      inItemName: LocalItemName,
      inDataPK: LocalDataPK
    }).then(PromiseData => {
      res.json(PromiseData);
    });
  } else {
    res.json({ KTF: false, KReason: "Need to send inFileNameWithExtension" });
  };
});

module.exports = router;