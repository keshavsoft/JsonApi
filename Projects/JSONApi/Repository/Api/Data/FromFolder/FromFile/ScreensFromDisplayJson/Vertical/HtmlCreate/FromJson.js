let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/FromJson");

exports.FromJson = async ({ inJsonConfig, inItemConfig, inDataPK }) => {
    return await dal.FromJson({ inJsonConfig, inItemConfig, inDataPK });
};