let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking");

let InsertFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;
    let LocalJsonPK = req.body.JsonPk;
    let LocalDataToInsert = req.body.DataToInsert;
    let LocalSubTableKey = req.body.SubTableKey;
    console.log("ccccccccccccc", LocalSubTableKey);
    let PromiseData = await Repos.InsertFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inJsonPk: LocalJsonPK,
        inSubTableKey: LocalSubTableKey,
        inDataToInsert: LocalDataToInsert
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

let PostFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalJsonPK = req.body.JsonPk;
    let LocalSubTableKey = "";

    let PromiseData = await Repos.PostFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inJsonPk: LocalJsonPK,
        inSubTableKey: LocalSubTableKey
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

let DeleteFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalJsonPK = req.body.JsonPk;
    //JsonPk

    let PromiseData = await Repos.DeleteFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inJsonPk: LocalJsonPK
    });

    res.end(JSON.stringify(PromiseData));
};

let PatchFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;

    let LocalJsonPK = req.body.JsonPk;
    let LocalDataToUpdate = req.body.DataToUpdate;
    //JsonPk
    console.log("UUUUUUUUUUUUU", req.body);
    let PromiseData = await Repos.PatchFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inJsonPk: LocalJsonPK,
        inDataToUpdate: LocalDataToUpdate
    });

    res.end(JSON.stringify(PromiseData));
};

//patch

module.exports = {
    PostFunc,
    DeleteFunc,
    PatchFunc,
    InsertFunc
};

