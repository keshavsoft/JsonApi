let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK");

let PostFunc = async (req, res) => {
    // let LocalDataPK = req.KeshavSoft.DataPk;
    // let LocalInPostData = req.body.inPostData;

    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileNameOnly = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;
    let LocalRowPk = req.body.inRowPk;

    Repos.PostFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileNameOnly,
        inItemName: LocalItemName,
        inRowPk: LocalRowPk,
        inDataPK: LocalDataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    });

};

module.exports = {
    PostFunc
};

