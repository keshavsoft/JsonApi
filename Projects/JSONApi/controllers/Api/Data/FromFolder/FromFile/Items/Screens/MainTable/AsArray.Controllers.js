let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/Screens/MainTable/AsArray");

let PostFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;
    let LocalinScreenName = req.body.inScreenName;

    let PromiseData = Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalinScreenName
    });

    res.end(JSON.stringify(PromiseData));

};

module.exports = {
    PostFunc
};

