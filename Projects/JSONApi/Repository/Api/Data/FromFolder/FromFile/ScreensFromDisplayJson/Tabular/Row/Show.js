let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show");

exports.FromParams = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPk }) => {
    return await dal.FromParams({ inDataPK, inJsonConfig, inItemConfig, inJsonPk });
};