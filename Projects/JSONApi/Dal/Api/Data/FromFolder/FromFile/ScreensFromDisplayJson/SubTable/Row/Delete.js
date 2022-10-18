//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/DeleteData/ForTable/Row/Delete");
//let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/Row/Delete");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Row/Delete");

exports.FromRowPK = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.SubTableDelete({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inJsonPK, inDataPK, InsertKey, MainRowPK });

    return await LocalDataToReturn;
};
