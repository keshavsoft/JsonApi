//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromVertical/Save");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/FromVertical/Save");

exports.CheckAndSave = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData }) => {
    let LocalFromCommonDataSupply = await CommonDataSupply.CheckAndSave({ inJsonConfig, inItemConfig, inDataPK, inPostData });

    return await LocalFromCommonDataSupply;
};
