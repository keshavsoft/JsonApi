let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");

let PostFunc = async (req, res, next) => {
    //  console.log("------ : ", req.KeshavSoft);
    //let LocalUserName = req.KeshavSoft.kUserName;
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileNameOnly;
    let LocalItemName = req.body.inItemName;

    //  console.log("-----ppppp : ", LocalFileName);
    let PromiseData = await Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

module.exports = {
    PostFunc
};

