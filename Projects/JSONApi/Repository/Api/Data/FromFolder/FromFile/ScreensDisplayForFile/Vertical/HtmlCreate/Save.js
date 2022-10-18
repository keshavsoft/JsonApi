let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/Vertical/HtmlCreate/Save");

exports.CheckAndSave = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData }) => {
    return await dal.CheckAndSave({ inJsonConfig, inItemConfig, inDataPK, inPostData });
};