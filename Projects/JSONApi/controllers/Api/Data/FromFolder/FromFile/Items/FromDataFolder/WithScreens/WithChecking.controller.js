let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking");

let CreateNewFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;
    console.log("ppppppppppppp");

    let PromiseData = await Repos.CreateNewFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

let InsertFunc = async (req, res, next) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;
    let LocalJsonPK = req.body.JsonPk;
    let LocalDataToInsert = req.body.inPostData;


    let PromiseData = await Repos.InsertFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inJsonPk: LocalJsonPK,
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

module.exports = {
    PostFunc,
    DeleteFunc,
    PatchFunc,
    InsertFunc,
    CreateNewFunc
};

