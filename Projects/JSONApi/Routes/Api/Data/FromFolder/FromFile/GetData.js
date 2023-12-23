let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/Api/Data/FromFolder/FromFile/GetData");

router.post('/', function (req, res, next) {
    let LocalDataPK;
    let LocalFolderName;
    let LocalFileNameOnly;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inFolderName" in req.body) {
                LocalFolderName = req.body.inFolderName;

                if ("inFileNameOnly" in req.body) {
                    LocalFileNameOnly = req.body.inFileNameOnly;

                    let LocalFromRepo = Repos.PostFunc({
                        inFolderName: LocalFolderName,
                        inFileNameOnly: LocalFileNameOnly,
                        inDataPK: LocalDataPK
                    });

                    res.json(LocalFromRepo);
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
});

module.exports = router;