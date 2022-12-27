let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData");

let PostFunc = async (req, res, next) => {
    //  console.log("------ : ", req.KeshavSoft);
    //let LocalUserName = req.KeshavSoft.kUserName;
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalJsonPK = req.body.JsonPk;
    //JsonPk
    
    let PromiseData = await Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inJsonPk: LocalJsonPK
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

module.exports = {
    PostFunc
};

