let express = require('express');
let router = express.Router();
//let Repos = require("../../../../Repository/Api/Table/Footer/KeyPress");
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/KeyPress");
let Middleware = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/KeyPress");

router.post('/EnterToServer', Middleware.EnterToServer, function (req, res, next) {
    let LocalJsonConfig;
    let LocalItemConfig;
    let LocalinInsertKey;
    let LocalDataPK;
    let LocalDataToSearch;

    LocalJsonConfig = req.body.JsonConfig;

    if (("ItemConfig" in req.body) === false) res.json("Need to send ItemConfig");

    LocalItemConfig = req.body.ItemConfig;

    if (("insertkey" in req.body) === false) res.json("Need to send insertkey");

    LocalinInsertKey = req.body.insertkey;

    if (("DataToSearch" in req.body) === false) res.json("Need to send DataToSearch");

    LocalDataToSearch = req.body.DataToSearch;

    if (("KeshavSoft" in req) === false) res.json("Need to send KeshavSoft");

    if (("DataPk" in req.KeshavSoft) === false) res.json("Need to send KeshavSoft");

    LocalDataPK = req.KeshavSoft.DataPk;

    Repos.EnterToServer({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inInsertKey: LocalinInsertKey,
        inPostData: LocalDataToSearch,
        inDataPK: LocalDataPK
    }).then((PromiseData) => {
        res.end(JSON.stringify(PromiseData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;