let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/PullData");

router.get('/WithConfig', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;

    Repos.WithConfig({
        inDataPk: LocalDataPk,
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.post('/WithConfig', function (req, res, next) {
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

    Repos.WithConfig({
        inDataPk: LocalDataPk,
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;