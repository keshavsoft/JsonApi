let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/Delete");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    return await dal.FromRowPK({ inFolderName, inFileNameWithExtension, inItemName, inJsonPK, inDataPK, InsertKey, MainRowPK });
};