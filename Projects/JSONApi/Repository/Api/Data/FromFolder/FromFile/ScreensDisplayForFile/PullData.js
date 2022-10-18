let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/PullData");

exports.WithConfig = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    return await dal.WithConfig({ inDataPk, inJsonConfig, inItemConfig });
};