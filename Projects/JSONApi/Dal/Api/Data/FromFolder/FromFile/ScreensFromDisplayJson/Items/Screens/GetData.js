let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/KeysAsArray");

exports.UsingFolderFileAndItem = async ({ inDataPK, inFolderName, inFileNameWithExtension, inItemName }) => {
   let LocalDataToReturn = await CommonDataSupply.ReturnArray({ inDataPK, inFolderName, inFileNameWithExtension, inItemName });
   return await LocalDataToReturn;
};

