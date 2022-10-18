let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesjson/GetData")

exports.AsArray = async ({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    return await dal.AsArray({ inDataPK, inFolderName, inFileNameWithExtension, inItemName, inScreenName });
};