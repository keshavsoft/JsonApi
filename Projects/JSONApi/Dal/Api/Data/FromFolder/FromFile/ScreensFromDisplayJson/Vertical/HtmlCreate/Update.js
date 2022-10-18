let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromVertical/Update");

exports.WithPK = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK }) => {
    let LocalReturnData = await CommonDataSupply.StartFunc({
        inJsonConfig, inItemConfig,
        inDataPK, inPostData, inRowPK
    });

    return await LocalReturnData;
};
