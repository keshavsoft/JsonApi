// let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForTable/PullFuncs");
let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForTable/WithSelectedColumns");

exports.WithConfig = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    let inFolderName = inJsonConfig.inFolderName;
    let inFileName = inJsonConfig.inJsonFileName;
    let inItemName = inItemConfig.inItemName;
    let inScreenName = inItemConfig.inScreenName;

    //let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inJsonConfig, inItemConfig });

    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inFolderName, inFileName, inItemName, inScreenName });

    return await LocalDataToReturn;
};

