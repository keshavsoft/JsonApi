let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update")
let CommonMiddleWares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update")

router.post("/", CommonMiddleWares.FromParams, (req, res) => {
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToUpdate;
    let LocalRowPK = req.body.pk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.WithPK({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody,
        inRowPK: LocalRowPK
    }).then(promiseData => {
        res.end(JSON.stringify(promiseData))
    });


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