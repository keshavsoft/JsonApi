let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/FromDisplayJson/PullDataFromScreens/AsArray");
let CommonAsArrayOfObjects = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/FromDisplayJson/PullDataFromScreens/WithColumnCount")

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension, inItemName }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inFolderName, inFileNameWithExtension, inItemName });
    return await LocalDataToReturn;
};

exports.AsArrayOfObjects = async ({ inFolderName, inFileNameWithExtension, inItemName, inDataPK }) => {
    let LocalDataToReturn = await CommonAsArrayOfObjects.StartFunc({ inFolderName, inFileNameWithExtension, inItemName, inDataPK });
    return await LocalDataToReturn;
};
