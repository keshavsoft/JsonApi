let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/PopUp/Save");

exports.CheckAndSave = async ({
    inDataPK,
    inJsonConfig,
    inItemConfig,
    inJsonPK,
    inPostData,
    inInsertKey }) => {

    return await dal.CheckAndSave({
        inDataPK,
        inJsonConfig,
        inItemConfig,
        inJsonPK,
        inPostData,
        inInsertKey
    });
};