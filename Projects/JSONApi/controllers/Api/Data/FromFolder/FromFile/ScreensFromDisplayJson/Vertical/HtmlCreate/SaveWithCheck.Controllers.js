let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/SaveWithCheck")

const CheckAndSave = (req, res) => {
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
}



module.exports = { CheckAndSave };