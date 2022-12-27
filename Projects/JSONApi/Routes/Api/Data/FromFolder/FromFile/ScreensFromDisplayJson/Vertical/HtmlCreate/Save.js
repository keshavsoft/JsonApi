let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save")

router.post("/", (req, res) => {
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToSave;
    console.log("LocalBody : ", LocalBody);
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.CheckAndSave({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });
});

module.exports = router;