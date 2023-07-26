let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK");

let PostFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;

    let PromiseData = await Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName
    });

    res.end(JSON.stringify(PromiseData));

};

module.exports = {
    PostFunc
};

