let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/Row/Delete");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    return await dal.FromRowPK({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK });
};