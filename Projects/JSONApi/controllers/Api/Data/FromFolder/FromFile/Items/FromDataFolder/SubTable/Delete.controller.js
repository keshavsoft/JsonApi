let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Delete")

let WithPK = async (req, res, next) => {

    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileName;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;
    let LocalJsonPK = req.body.RowPK;
    let LocalInsertKey = req.body.InsertKey;
    let LocalMainRowPK = req.body.MainRowPK;

    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.FromRowPK({
        inFolderName: LocalFolderName,
        inFileNameWithExtension: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inJsonPK: LocalJsonPK,
        inDataPK: LocalDataPK,
        InsertKey: LocalInsertKey,
        MainRowPK: LocalMainRowPK
    }).then(PromiseData => {
        console.log("PromiseData",PromiseData);
        res.json(PromiseData);
    });
};

module.exports = {
    WithPK,
};

