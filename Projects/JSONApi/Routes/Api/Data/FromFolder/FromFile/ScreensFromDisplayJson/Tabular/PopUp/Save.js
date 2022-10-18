let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/PopUp/Save")

let CommonMiddleWare = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/PopUp/Save")

router.post("/CheckAndSave", CommonMiddleWare.FromParams,(req, res) => {
    console.log("sssssssssssss.....ss......");
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToSave;

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