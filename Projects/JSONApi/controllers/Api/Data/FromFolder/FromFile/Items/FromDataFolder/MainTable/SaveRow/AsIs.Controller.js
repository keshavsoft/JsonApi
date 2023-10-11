let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/AsIs");

let PostFunc = (req, res, next) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileNameOnly = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;
    let LocalDataToInsert = req.body.inDataToInsert;
    let LocalDataPk = req.KeshavSoft.DataPk;

    let PromiseData = Repos.PostFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileNameOnly,
        inItemName: LocalItemName,
        inDataPK: LocalDataPk,
        inDataToInsert: LocalDataToInsert
    });

    res.json(PromiseData);
};

module.exports = {
    PostFunc
};

