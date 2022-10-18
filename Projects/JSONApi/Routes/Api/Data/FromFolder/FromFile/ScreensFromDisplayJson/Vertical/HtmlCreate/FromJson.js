let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/FromJson")

router.post("/", (req, res) => {
    let LocalFolderName;
    let LocalFileName;
    let LocalItemName;
    let LocalScreenName;

    if (("inFolderName" in req.body) === false) res.json("Need to send inFolderName");

    LocalFolderName = req.body.inFolderName;

    if (("inFileName" in req.body) === false) res.json("Need to send inFileName");

    LocalFileName = req.body.inFileName;

    if (("inItemName" in req.body) === false) res.json("Need to send inItemName");

    LocalItemName = req.body.inItemName;

    if (("inScreenName" in req.body) === false) res.json("Need to send inScreenName");

    LocalScreenName = req.body.inScreenName;

    let LocalJsonConfig = {
        inFolderName: LocalFolderName,
        inJsonFileName: LocalFileName
    };

    let LocalItemConfig = {
        inItemName: LocalItemName,
        inScreenName: LocalScreenName
    };

    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.FromJson({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });
});

module.exports = router;