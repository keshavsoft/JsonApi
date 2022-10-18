let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/GetData")

exports.UsingFolderFileAndItem = async ({ inDataPK,inFolderName, inFileNameWithExtension,inItemName}) => {
    return await dal.UsingFolderFileAndItem({ inDataPK,inFolderName, inFileNameWithExtension ,inItemName});
};