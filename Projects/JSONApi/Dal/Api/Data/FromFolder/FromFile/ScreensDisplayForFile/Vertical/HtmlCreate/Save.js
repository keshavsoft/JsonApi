let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromFile/Screens/Items/PushData/FromVertical/Save");

exports.CheckAndSave = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData }) => {
    let LocalReturnData = await CommonDataSupply.CheckAndSave({ inJsonConfig, inItemConfig, inDataPK, inPostData });

    return await LocalReturnData;
};
