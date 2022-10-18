//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/DeleteData/ForTable/Row/Delete");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/Row/Delete");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.FromRowPK({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK });

    return await LocalDataToReturn;
};
