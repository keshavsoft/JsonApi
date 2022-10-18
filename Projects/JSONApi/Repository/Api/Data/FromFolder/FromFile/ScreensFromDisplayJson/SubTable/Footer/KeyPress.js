let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/KeyPress");

exports.EnterToServer = async ({ inJsonConfig, inItemConfig, inInsertKey, inDataPK, inPostData }) => {
    return await dal.EnterToServer({ inJsonConfig, inItemConfig, inInsertKey, inDataPK, inPostData });
};
