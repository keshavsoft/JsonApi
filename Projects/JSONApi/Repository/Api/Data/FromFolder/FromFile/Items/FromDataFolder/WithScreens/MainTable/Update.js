let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Update");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK}) => {
    return await dal.PostFunc({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK });
};