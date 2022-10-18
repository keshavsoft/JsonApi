let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/Vertical/HtmlCreate/Save")

router.post("/", (req, res) => {
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

    Repos.CheckAndSave({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });
});

module.exports = router;