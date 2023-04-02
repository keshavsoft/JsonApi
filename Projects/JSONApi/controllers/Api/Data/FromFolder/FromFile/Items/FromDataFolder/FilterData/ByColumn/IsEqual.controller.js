let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual");

let PostFunc = async (req, res) => {
    // let LocalDataPK = req.KeshavSoft.DataPk;
    // let LocalInPostData = req.body.inPostData;

    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileNameOnly = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;
    let LocalColumnName = req.body.inColumnName;
    let LocalValueToCheck = req.body.inValueToCheck;

    Repos.PostFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileNameOnly,
        inItemName: LocalItemName,
        inColumnName: LocalColumnName,
        inValueToCheck: LocalValueToCheck,
        inDataPK: LocalDataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    });

};

module.exports = {
    PostFunc
};

