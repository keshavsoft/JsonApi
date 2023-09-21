let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/FilterAndGroupBy");

let PostFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalMapString = req.body.MapString;
    let LocalFilterString = req.body.FilterString;

    let PromiseData = await Repos.PostFunc({
        inDataPk: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inMapString: LocalMapString,
        inFilterString: LocalFilterString,
    });
    res.end(JSON.stringify(PromiseData));
};

module.exports = {
    PostFunc
};