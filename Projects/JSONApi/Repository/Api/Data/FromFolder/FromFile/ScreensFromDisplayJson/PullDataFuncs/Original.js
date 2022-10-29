let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullDataFuncs/Original");

exports.Original = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    return await dal.Original({ inDataPk, inJsonConfig, inItemConfig });
};