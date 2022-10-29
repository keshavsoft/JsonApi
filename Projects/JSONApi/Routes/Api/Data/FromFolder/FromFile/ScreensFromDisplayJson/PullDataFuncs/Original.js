let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullDataFuncs/Original");
let CommonMiddlewares = require("../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/FullDataFuncs/Original");

router.post('/', CommonMiddlewares.FromParams, (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileName;
    let LocalItemName = req.body.inItemName;
    let LocalScreenName = req.body.inScreenName;

    let LocalJsonConfig = {
        inFolderName: LocalFolderName,
        inJsonFileName: LocalFileName
    };

    let LocalItemConfig = {
        inItemName: LocalItemName,
        inScreenName: LocalScreenName
    };

    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.Original({
        inDataPk: LocalDataPk,
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;