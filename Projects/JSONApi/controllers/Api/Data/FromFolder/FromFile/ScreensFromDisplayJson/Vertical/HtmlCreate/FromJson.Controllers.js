let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/FromJson")

const FromJson = (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileName;
    let LocalItemName = req.body.inItemName;
    let LocalScreenName = req.body.inScreenName;

    let LocalJsonConfig = {
        inFolderName: LocalFolderName,
        inJsonFileName: `${LocalFileName}.json`
    };

    let LocalItemConfig = {
        inItemName: LocalItemName,
        inScreenName: LocalScreenName
    };
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.FromJson({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });
}

module.exports = { FromJson };