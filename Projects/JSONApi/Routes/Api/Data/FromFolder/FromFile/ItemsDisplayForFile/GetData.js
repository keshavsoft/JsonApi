let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/ItemsDisplayForFile/GetData");

router.get('/AsArray', function (req, res, next) {
  // console.log("ssssssssssss");
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFoldername = req.KeshavSoft.JsonConfig.inFolderName;
  let LocalFileNameWithExtension = req.KeshavSoft.JsonConfig.inJsonFileName;
  Repos.AsArray({
    inDataPk: LocalDataPk, inFolderName: LocalFoldername,
    inFileNameWithExtension: LocalFileNameWithExtension
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/AsArray', function (req, res, next) {
  console.log("this is post-------", req.body);
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFoldername = req.body.inFolderName;
  let LocalFileNameWithExtension = req.body.inJsonFileName;
  Repos.AsArray({
    inDataPk: LocalDataPk, inFolderName: LocalFoldername,
    inFileNameWithExtension: LocalFileNameWithExtension
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});


module.exports = router;