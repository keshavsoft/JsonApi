let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromFile/Screens/Items/PullData/ForVertical/HtmlCreate/Fromjson");

exports.FromJson = async ({ inJsonConfig, inItemConfig, inDataPK }) => {
    let LocalReturnData = await CommonDataSupply.ShowWithDataPK({ inJsonConfig, inItemConfig, inDataPK });
    return await LocalReturnData;
};
