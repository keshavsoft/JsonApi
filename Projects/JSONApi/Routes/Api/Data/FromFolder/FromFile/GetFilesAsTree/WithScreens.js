let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/GetFilesAsTree/WithScreens");

router.get('/:inFolderName', function (req, res, next) {
  let LocalDataPK = req.KeshavSoft.DataPk;
  let LocalFolderName = req.params.inFolderName;

  Repos.FileItemOnly({ inDataPK: LocalDataPK, inFolderName: LocalFolderName }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

router.post('/FileItemScreen', function (req, res, next) {
  console.log("FileItemScreen : ", req.body);
  let LocalDataPK = req.KeshavSoft.DataPk;
  let LocalFolderName = req.body.inFolderName;

  Repos.FileItemAndScreen({ inDataPK: LocalDataPK, inFolderName: LocalFolderName }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});


module.exports = router;