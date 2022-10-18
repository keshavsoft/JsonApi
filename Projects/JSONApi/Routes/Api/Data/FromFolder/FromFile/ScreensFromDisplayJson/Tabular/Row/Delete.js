let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Delete");
let CommonMiddleWare = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Delete")

router.post('/FromRowPK',CommonMiddleWare.FromParams, function (req, res, next) {
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileName;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.ScreenName;

  let LocalJsonPK = req.body.RowPK;
  let LocalDataPK = req.KeshavSoft.DataPk;

  Repos.FromRowPK({
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName,
    inScreenName: LocalScreenName,
    inJsonPK: LocalJsonPK,
    inDataPK: LocalDataPK
  }).then(PromiseData => {
    res.json(PromiseData);
  });
});

module.exports = router;