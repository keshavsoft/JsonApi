let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Delete");

let PostFunc = async (req, res, next) => {
    let LocalJsonConfig = req.body.inJsonConfig;
    let LocalItemConfig = req.body.inItemConfig;
    let LocalBody = req.body.inPostData;
    let LocalRowPK = req.body.inJsonPK;
    let LocalDataPk = req.KeshavSoft.DataPk;

    let PromiseData = await Repos.PostFunc({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody,
        inRowPK: LocalRowPK
    });

    res.json(PromiseData);
};

module.exports = {
    PostFunc
};

