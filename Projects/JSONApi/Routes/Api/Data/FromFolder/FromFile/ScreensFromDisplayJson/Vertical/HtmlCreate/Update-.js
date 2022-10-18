let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update")

router.post("/", (req, res) => {
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToUpdate;
    let LocalRowPK = req.body.pk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    if (Object.keys(req.body).length === 0) {
        res.end(JSON.stringify({
            KReason: "Boby should contain the object : ", inBody: {
                pk: '',
                insertkey: '',
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
            inRowPK: LocalRowPK
        }).then(promiseData => {
            res.end(JSON.stringify(promiseData))
        });
    };


    // Repos.WithPK({
    //     inJsonConfig: LocalJsonConfig,
    //     inItemConfig: LocalItemConfig,
    //     inDataPK: LocalDataPk,
    //     inPostData: LocalBody,
    //     inRowPK: LocalRowPK
    // }).then(promiseData => {
    //     res.end(JSON.stringify(promiseData))
    // });

});

module.exports = router;