let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/Tabular/Row/Show");

exports.FromParams = async ({ inDataPk, inJsonConfig, inItemConfig, inJsonPk }) => {
    return await dal.FromParams({ inDataPk, inJsonConfig, inItemConfig, inJsonPk });
};