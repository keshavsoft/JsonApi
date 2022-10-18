let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update")

router.post("/", (req, res) => {
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToUpdate;
    let LocalRowPK = req.body.MainRowPK;
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalSubTableKey = req.body.InsertKey;
    let LocalSubTableRowPK = req.body.SubTableRowPK;

    console.log("kkkkkk : ", req.body);
    if (Object.keys(req.body).length === 0) {
        res.end(JSON.stringify({
            KReason: "Boby should contain the object : ",
            inBody: {
                SubTableRowPK: 0,
                MainRowPK: 0,
                InsertKey: '',
                JsonConfig: { inFolderName: '', inJsonFileName: '' },
                ItemConfig: { inItemName: '', inScreenName: '' },
                inDataToUpdate: {
                }
            }
        }));
    } else {
        Repos.WithPK({
            inJsonConfig: LocalJsonConfig,
            inItemConfig: LocalItemConfig,
            inDataPK: LocalDataPk,
            inPostData: LocalBody,
            inRowPK: LocalRowPK,
            inSubTableKey: LocalSubTableKey,
            inSubTableRowPK: LocalSubTableRowPK
        }).then(promiseData => {
            res.end(JSON.stringify(promiseData))
        });
    };

});

module.exports = router;