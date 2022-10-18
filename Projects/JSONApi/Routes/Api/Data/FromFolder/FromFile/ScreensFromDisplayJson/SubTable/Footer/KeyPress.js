let express = require('express');
let router = express.Router();

let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/KeyPress");
let Middleware = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/KeyPress");

router.post('/EnterToServer', Middleware.EnterToServer, function (req, res) {
    console.log("sub table----------");

    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalinInsertKey = req.body.insertkey;
    let LocalDataToSearch = req.body.DataToSearch;

    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.EnterToServer({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inInsertKey: LocalinInsertKey,
        inPostData: LocalDataToSearch,
        inDataPK: LocalDataPK
    }).then((PromiseData) => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;