let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsArray");
let CommonDataSupplyWithItemCount = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsTree/WithCounts");

exports.AsArray = async ({ inDataPk, inJsonConfig }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inJsonConfig });
    return await LocalDataToReturn;
};

exports.UsingFolderAndFile = async ({ inFolderName, inFileNameWithExtension, inDataPK }) => {
    let LocalDataToReturn = await CommonDataSupplyWithItemCount.StartFunc({ inFolderName, inFileNameWithExtension, inDataPK });
    return await LocalDataToReturn;
};
