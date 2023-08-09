let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Row/Delete");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.SubTableDelete({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK });

    return await LocalDataToReturn;
};
