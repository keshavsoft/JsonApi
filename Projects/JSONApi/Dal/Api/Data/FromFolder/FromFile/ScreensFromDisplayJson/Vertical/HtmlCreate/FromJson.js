let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForVertical/HtmlCreate/Fromjson");

exports.FromJson = async ({ inJsonConfig, inItemConfig, inDataPK }) => {
    let LocalReturnData = await CommonDataSupply.ShowWithDataPK({
        inFolderName: inJsonConfig.inFolderName,
        inFileName: inJsonConfig.inJsonFileName,
        inItemName: inItemConfig.inItemName,
        inScreenName: inItemConfig.inScreenName,
        inDataPK
    });

    return await LocalReturnData;
};
