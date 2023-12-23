let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK");

let PostFunc = (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;

    let PromiseData = Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName
    });

    res.json(PromiseData);
};

module.exports = {
    PostFunc
};

