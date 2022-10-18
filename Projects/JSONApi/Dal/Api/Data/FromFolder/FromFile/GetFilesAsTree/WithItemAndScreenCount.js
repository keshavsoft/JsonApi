let CommonDataSupplyWithItemAndScreenCount = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/PullData/AsTree/FilesWithItemsAndRowCount");

exports.AsArrayOfObjects = async ({ inDataPK, inFolderName }) => {
    let LocalDataToReturn = await CommonDataSupplyWithItemAndScreenCount.StartFunc({ inDataPK, inFolderName });
    
    return await LocalDataToReturn;
};


