let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/Save");
let CommonMiddlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/Save");

router.post('/', CommonMiddlewares.SaveFunc, function (req, res, next) {
  console.log("KJDBJDJD");
  let LocalJsonConfig;
  let LocalItemConfig;
  let LocalBody;
  let LocalinInsertKey;
  let LocalJsonPK;
  let LocalDataPK;

  LocalJsonConfig = req.body.JsonConfig;

  LocalItemConfig = req.body.ItemConfig;

  LocalBody = req.body.inDataToSave;

  LocalinInsertKey = req.body.insertkey;

  LocalJsonPK = req.body.pk;

  LocalDataPK = req.KeshavSoft.DataPk;

  Repos.SaveFunc({
    inDataPK: LocalDataPK,
    inJsonConfig: LocalJsonConfig,
    inItemConfig: LocalItemConfig,
    inJsonPK: LocalJsonPK,
    inPostData: LocalBody,
    inInsertKey: LocalinInsertKey
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});


router.post('/1', CommonMiddlewares.SaveFunc, function (req, res, next) {
  let LocalJsonConfig;
  let LocalItemConfig;
  let LocalBody;
  let LocalinInsertKey;
  let LocalJsonPK;
  let LocalDataPK;

  if (("JsonConfig" in req.body) === false) res.json("Need to send JsonConfig");

  LocalJsonConfig = req.body.JsonConfig;

  if (("ItemConfig" in req.body) === false) res.json("Need to send ItemConfig");

  LocalItemConfig = req.body.ItemConfig;

  if (("inDataToSave" in req.body) === false) res.json("Need to send inDataToSave");

  LocalBody = req.body.inDataToSave;

  if (("insertkey" in req.body) === false) res.json("Need to send insertkey");

  LocalinInsertKey = req.body.insertkey;

  if (("pk" in req.body) === false) res.json("Need to send pk");

  LocalJsonPK = req.body.pk;

  if (("KeshavSoft" in req) === false) res.json("Need to send KeshavSoft");

  if (("DataPk" in req.KeshavSoft) === false) res.json("Need to send KeshavSoft");

  LocalDataPK = req.KeshavSoft.DataPk;

  Repos.SaveFunc({
    inDataPK: LocalDataPK,
    inJsonConfig: LocalJsonConfig,
    inItemConfig: LocalItemConfig,
    inJsonPK: LocalJsonPK,
    inPostData: LocalBody,
    inInsertKey: LocalinInsertKey
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

module.exports = router;