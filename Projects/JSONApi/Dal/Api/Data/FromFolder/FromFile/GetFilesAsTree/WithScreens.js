let CommonDataSupplyFilesWithItemsAndRowCount = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/AsTree/FilesWithItemsAndRowCount");
let CommonDataSupplyFilesItemsScreens = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/AsTree/FilesItemsScreens");

exports.FileItemOnly = async ({ inDataPK, inFolderName }) => {
    let LocalDataToReturn = await CommonDataSupplyFilesWithItemsAndRowCount.StartFunc({ inDataPK, inFolderName });
    return await LocalDataToReturn;
};

exports.FileItemAndScreen = async ({ inDataPK, inFolderName }) => {
    let LocalDataToReturn = await CommonDataSupplyFilesItemsScreens.StartFunc({ inDataPK, inFolderName });
    return await LocalDataToReturn;
};


