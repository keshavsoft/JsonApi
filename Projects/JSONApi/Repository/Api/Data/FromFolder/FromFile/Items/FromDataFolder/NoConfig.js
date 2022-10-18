let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/NoConfig");

exports.GetFunc = async ({ inDataPk, inFolderName, inFileNameWithExtension, inItemName }) => {
    return await dal.GetFunc({ inDataPk, inFolderName, inFileNameWithExtension, inItemName });
};