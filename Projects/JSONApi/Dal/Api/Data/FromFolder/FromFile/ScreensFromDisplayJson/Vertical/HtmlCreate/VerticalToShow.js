let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForVertical/HtmlCreate/VerticalToShow");

exports.VerticalToShow = async ({ inJsonConfig, inItemConfig, inDataPK }) => {
    let LocalReturnData = await CommonDataSupply.StartFunc({ inJsonConfig, inItemConfig, inDataPK });
    
    return await LocalReturnData;
};
