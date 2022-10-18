let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullData");

exports.WithConfig = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    return await dal.WithConfig({ inDataPk, inJsonConfig, inItemConfig });
};