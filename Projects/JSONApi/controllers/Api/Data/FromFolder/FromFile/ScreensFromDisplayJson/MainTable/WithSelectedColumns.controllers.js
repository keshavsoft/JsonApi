let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns")

const WithConfig  = (req, res) => {
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
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });
}



module.exports = { WithConfig };