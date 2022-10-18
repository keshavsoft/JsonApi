let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/AsTree");

exports.WithRowCount = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    return await dal.WithRowCount({ inDataPk, inFolderName, inFileNameWithExtension });
};