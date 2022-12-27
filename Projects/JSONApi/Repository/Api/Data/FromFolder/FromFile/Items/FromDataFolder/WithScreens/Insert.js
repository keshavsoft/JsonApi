let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/Insert");

exports.PostFunc = async ({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, inDataToInsert }) => {
    return await dal.PostFunc({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, inDataToInsert });
};