let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/Api/Preview/ShowData");

router.get('/', function (req, res, next) {
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.ShowData({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig, inPK: req.query.PK,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.post('/', function (req, res, next) {
    let LocalJsonConfig = {
        inFolderName: req.body.inFolderName,
        inJsonFileName: req.body.inJsonFileName
    };
    let LocalItemConfig = {
        inItemName: req.body.inItemName
    };
    let LocalRowPK = req.body.inRowPK;

    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.ShowData({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig,
        inPK: LocalRowPK,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.post('/FromDataFolder', function (req, res, next) {
    let LocalJsonConfig = {
        inFolderName: req.body.inFolderName,
        inJsonFileName: req.body.inJsonFileName
    };
    let LocalItemConfig = {
        inItemName: req.body.inItemName,
        inScreenName: req.body.inScreenName
    };
    let LocalRowPK = req.body.inRowPK;

    let LocalDataPK = req.KeshavSoft.DataPk;
    
    Repos.FromDataFolder({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig,
        inPK: LocalRowPK,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.json(PromiseData);
    });
});

router.get('/Bulk', function (req, res, next) {
    Repos.Bulk({
        inReportName: "BillPrint", inDataToPreview: [98996, 98997], inUserName: "SVJP", callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    })
});

module.exports = router;