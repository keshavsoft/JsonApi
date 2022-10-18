let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update");

exports.WithPK = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK }) => {
    return await dal.WithPK({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK });
};