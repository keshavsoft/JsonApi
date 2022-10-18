let express = require("express");
let router = express();
let Repos = require('../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/GetData')

router.post('/AsArray', (req, res) => {
    let LocalDataPK;
    let LocalFolderName;
    let LocalFileName;
    let LocalItemName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inFolderName" in req.body) {
                LocalFolderName = req.body.inFolderName;

                if ("inFileNameWithExtension" in req.body) {
                    LocalFileName = req.body.inFileNameWithExtension;

                    if ("inItemName" in req.body) {
                        LocalItemName = req.body.inItemName;

                        Repos.UsingFolderFileAndItem({
                            inFolderName: LocalFolderName,
                            inFileNameWithExtension: LocalFileName,
                            inDataPK: LocalDataPK,
                            inItemName: LocalItemName
                        }).then(PromiseData => {
                            res.json(PromiseData);
                        });

                    } else {
                        res.json({ KTF: false, KReason: "Need to send inItemName" });
                    };
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
