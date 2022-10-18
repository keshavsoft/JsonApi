let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/Api/Data/FromFolder/FromFile/GetFiles");

router.get('/AsArray', function (req, res, next) {
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFolderName = req.KeshavSoft.JsonConfig.inFolderName;

  Repos.AsArray({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/AsArray', function (req, res, next) {
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFolderName = req.body.inFolderName;

  if ("inFolderName" in req.body) {
    Repos.AsArray({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
      res.end(JSON.stringify(PromiseData));
    });
  } else {
    res.json({ KTF: false, KReason: "Need to send inFolderName!" });
  };

});

router.get('/AsTreeFilesWithItemsAndRowCount/:inFolderName', function (req, res, next) {
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFolderName = req.params.inFolderName;

  Repos.AsTreeFilesWithItemsAndRowCount({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/AsTreeFilesWithItemsAndRowCount/:inFolderName', function (req, res, next) {
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFolderName = req.params.inFolderName;

  Repos.AsTreeFilesWithItemsAndRowCount({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

module.exports = router;