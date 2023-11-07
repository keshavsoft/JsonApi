let Repos = require("../../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainTable/SaveRow/WithPkTimeStamp");

let PostFunc = (req, res, next) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileNameOnly = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;
    let LocalScreenName = req.body.inScreenName;
    let LocalDataToInsert = req.body.inDataToInsert;
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalDatakUserName = req.KeshavSoft.kUserName;

    let PromiseData = Repos.PostFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileNameOnly,
        inItemName: LocalItemName,
        inScreenname: LocalScreenName,
        inDataPK: LocalDataPk,
        inDataToInsert: LocalDataToInsert,
        inDatakUserName: LocalDatakUserName
    });

    res.json(PromiseData);
};

module.exports = {
    PostFunc
};

