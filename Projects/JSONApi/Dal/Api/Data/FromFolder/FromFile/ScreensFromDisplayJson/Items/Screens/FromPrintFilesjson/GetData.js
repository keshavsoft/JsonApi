//let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromPrintFilesJson/AsArray");
let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/ItemNameAsFolder/ScreenNameAsFolder/PrintFilesFolder/HtmlFiles/PullData/ReturnHtmlContent");

exports.AsArray = async ({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
   //   let LocalDataToReturn = await CommonDataSupply.ReturnArray({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName });

   let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName });
   console.log("LocalDataToReturn: ", LocalDataToReturn);
   return await LocalDataToReturn;
};