let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK,inSubTableKey, inSubTableRowPK }) => {
    return await dal.WithPK({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK,inSubTableKey, inSubTableRowPK });
};