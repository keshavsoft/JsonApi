let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Update");

exports.UpdateFunc = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK}) => {
    return await dal.UpdateFunc({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK });
};