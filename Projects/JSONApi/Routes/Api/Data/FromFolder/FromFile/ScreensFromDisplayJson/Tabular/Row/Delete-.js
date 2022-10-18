let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Delete");

router.post('/FromRowPK', function (req, res, next) {
  let LocalFolderName;
  let LocalFileName;
  let LocalItemName;
  let LocalScreenName;

  let LocalJsonPK;
  let LocalDataPK;
  let LocalInsertKey;
  let LocalMainRowPK;

  if (("FolderName" in req.body) === false) res.json("Need to send FolderName");

  LocalFolderName = req.body.FolderName;

  if (("FileName" in req.body) === false) res.json("Need to send FileName");

  LocalFileName = req.body.FileName;

  if (("ItemName" in req.body) === false) res.json("Need to send ItemName");

  LocalItemName = req.body.ItemName;

  if (("ScreenName" in req.body) === false) res.json("Need to send ScreenName");

  LocalScreenName = req.body.ScreenName;

  if (("RowPK" in req.body) === false) res.json("Need to send RowPK");

  LocalJsonPK = req.body.RowPK;

  if (("InsertKey" in req.body) === false) res.json("Need to send RowPK");

  LocalInsertKey = req.body.InsertKey;

  if (("MainRowPK" in req.body) === false) res.json("Need to send RowPK");

  LocalMainRowPK = req.body.MainRowPK;

  if (("KeshavSoft" in req) === false) res.json("Need to send KeshavSoft");

  if (("DataPk" in req.KeshavSoft) === false) res.json("Need to send KeshavSoft");

  LocalDataPK = req.KeshavSoft.DataPk;

  Repos.FromRowPK({
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName,
    inScreenName: LocalScreenName,
    inJsonPK: LocalJsonPK,
    inDataPK: LocalDataPK,
    InsertKey: LocalInsertKey,
    MainRowPK: LocalMainRowPK
  }).then(PromiseData => {
    res.json(PromiseData);
  });
});

module.exports = router;