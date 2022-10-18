let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/From-ConfigFromFile");

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    let LocalDataToReturn = await CommonDataSupply.AsArray({ inDataPk, inFolderName, inFileNameWithExtension });
    return await LocalDataToReturn;
};
