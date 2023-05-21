let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/VerticalToShow");

exports.VerticalToShow = async ({ inJsonConfig, inItemConfig, inDataPK }) => {
    return await dal.VerticalToShow({ inJsonConfig, inItemConfig, inDataPK });
};