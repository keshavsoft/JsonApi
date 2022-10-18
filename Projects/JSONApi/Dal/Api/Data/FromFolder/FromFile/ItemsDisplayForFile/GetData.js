let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsArray");

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    let LocalDataToReturn = await CommonDataSupply.UsingFolderAndFile({ inDataPk, inFolderName, inFileNameWithExtension });
    return await LocalDataToReturn;
};
