//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromVertical/Save");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromTable/Footer/Save");

exports.CheckAndSave = async ({
    inDataPK,
    inJsonConfig,
    inItemConfig,
    inJsonPK,
    inPostData,
    inInsertKey }) => {

    let LocalFromCommonDataSupply = await CommonDataSupply.StartFunc({
        inDataPK,
        inJsonConfig,
        inItemConfig,
        inJsonPK,
        inPostData,
        inInsertKey
    });

    return await LocalFromCommonDataSupply;
};
