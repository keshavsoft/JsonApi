let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromPrintFilesJson/AsArray");

exports.AsArray = async ({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
   let LocalDataToReturn = await CommonDataSupply.ReturnArray({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName });
   return await LocalDataToReturn;
};