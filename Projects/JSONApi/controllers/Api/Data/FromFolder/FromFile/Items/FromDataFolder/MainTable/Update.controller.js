let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Update");

let UpdateFunc = async (req, res, next) => {
    let LocalJsonConfig = req.body.JsonConfig;
    let LocalItemConfig = req.body.ItemConfig;
    let LocalBody = req.body.inDataToUpdate;
    let LocalRowPK = req.body.pk;
    let LocalDataPk = req.KeshavSoft.DataPk;
    
    let PromiseData = await Repos.UpdateFunc({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inDataPK: LocalDataPk,
        inPostData: LocalBody,
        inRowPK: LocalRowPK
    });

    res.end(JSON.stringify(PromiseData));

    // .then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // });
};

module.exports = {
    UpdateFunc
};

