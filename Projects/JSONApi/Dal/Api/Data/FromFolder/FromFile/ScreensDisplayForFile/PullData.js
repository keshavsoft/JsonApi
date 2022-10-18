//let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsArray");
let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromFile/Screens/Items/PullData/ForTable/PullFuncs");

exports.WithConfig = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inJsonConfig, inItemConfig });
    return await LocalDataToReturn;
};
