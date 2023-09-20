//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromVertical/Save");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/FromVertical/SaveWithCheck");

exports.CheckAndSave = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData }) => {
    let LocalFromCommonDataSupply = await CommonDataSupply.CheckAndSave({ JsonConfig: inJsonConfig, ItemConfig: inItemConfig, inDataPK, inDataToSave: inPostData });

    return await LocalFromCommonDataSupply;
};
