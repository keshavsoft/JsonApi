let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Row/DeleteOnly");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.SubTableDelete({ inFolderName, inFileNameWithExtension, inItemName, inJsonPK, inDataPK, InsertKey, MainRowPK });

    return await LocalDataToReturn;
};
