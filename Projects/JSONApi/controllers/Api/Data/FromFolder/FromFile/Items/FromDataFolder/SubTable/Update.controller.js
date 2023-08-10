let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Update")

let WithPK = async (req, res, next) => {

    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToUpdate;
    let LocalRowPK = req.body.MainRowPK;
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalSubTableKey = req.body.InsertKey;
    let LocalSubTableRowPK = req.body.SubTableRowPK;

    let PromiseData = await Repos.WithPK({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody,
        inRowPK: LocalRowPK,
        inSubTableKey: LocalSubTableKey,
        inSubTableRowPK: LocalSubTableRowPK
    });

    res.json(PromiseData);
};

module.exports = {
    WithPK,
};

