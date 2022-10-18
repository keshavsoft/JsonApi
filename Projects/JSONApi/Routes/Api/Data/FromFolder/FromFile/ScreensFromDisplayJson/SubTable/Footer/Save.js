let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/Save");
let CommonMiddlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/Save");

router.post('/', CommonMiddlewares.SaveFunc, function (req, res, next) {
  let LocalJsonConfig = req.body.JsonConfig;
  let LocalItemConfig = req.body.ItemConfig;
  let LocalBody = req.body.inDataToSave;
  let LocalinInsertKey = req.body.insertkey;
  let LocalJsonPK = req.body.pk;
  let LocalDataPK = req.KeshavSoft.DataPk;

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