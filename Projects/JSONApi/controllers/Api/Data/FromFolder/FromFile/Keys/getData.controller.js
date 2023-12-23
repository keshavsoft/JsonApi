let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/Keys/GetData");

let PostFunc = (req, res) => {

    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileNameOnly;

    let PromiseData = Repos.PostFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inDataPK: LocalDataPK
    });
    res.status(200).json(PromiseData);
};

module.exports = {
    PostFunc
};
