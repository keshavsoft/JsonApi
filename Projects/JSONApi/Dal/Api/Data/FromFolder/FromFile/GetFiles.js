let CommonDataSupply = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/ListFiles");
let CommonDataSupplyFilesWithItemsAndRowCount = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/AsTree/FilesWithItemsAndRowCount");

exports.AsArray = async ({ inDataPk, inFolderName }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inFolderName });
    return await LocalDataToReturn;
};

exports.AsTreeFilesWithItemsAndRowCount = async ({ inDataPk, inFolderName }) => {
    let LocalDataToReturn = await CommonDataSupplyFilesWithItemsAndRowCount.StartFunc({ inDataPk, inFolderName });
    return await LocalDataToReturn;
};


