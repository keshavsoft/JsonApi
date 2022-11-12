let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inUserPK, inPostData }) => {
    return await dal.PostFunc({ inJsonConfig, inItemConfig, inUserPK, inPostData });
};