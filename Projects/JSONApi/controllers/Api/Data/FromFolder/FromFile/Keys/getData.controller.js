//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert");
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/Keys/GetData");

let PostFunc = (req, res, next) => {
    let LocalDataPK;
    let LocalFolderName;
    let LocalFileName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inFolderName" in req.body) {
                LocalFolderName = req.body.inFolderName;

                if ("inFileNameOnly" in req.body) {
                    LocalFileName = req.body.inFileNameOnly;

                    let PromiseData = Repos.PostFunc({
                        inFolderName: LocalFolderName,
                        inFileNameOnly: LocalFileName,
                        inDataPK: LocalDataPK
                    });

                    res.json(PromiseData);

                } else {
                    res.json({ KTF: false, KReason: "Need to send inFileNameWithExtension" });
                };
            } else {
                res.json({ KTF: false, KReason: "Need to send inFolderName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.KeshavSoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
};

module.exports = {
    PostFunc
};
