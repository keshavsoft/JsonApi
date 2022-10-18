let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/Save");

exports.SaveFunc = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey }) => {
    return await dal.SaveFunc({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey });
};
