let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/SaveWithCheck");

exports.CheckAndSave = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData }) => {
    return await dal.CheckAndSave({ inJsonConfig, inItemConfig, inDataPK, inPostData });
};