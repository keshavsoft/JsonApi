let Repos = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert");

let PostFunc = async (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileNameWithExtension = req.body.inJsonFileName;
    let LocalItemName = req.body.inItemName;

    let inJsonConfig = {
        inFolderName: LocalFolderName,
        inFileNameWithExtension: LocalFileNameWithExtension

    };
    let inItemConfig = {
        inItemName: LocalItemName
    }


    Repos.PostFunc({ inJsonConfig, inItemConfig, inUserPK, inPostData }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });

    res.json({});
};

module.exports = {
    PostFunc
};

