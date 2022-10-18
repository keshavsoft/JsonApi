//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromTable/Footer/Save");
//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromMainTable/Footer/Save");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/Footer/Save");

exports.SaveFunc = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPK, inJsonConfig, inItemConfig, inPostData });

    return await LocalDataToReturn;
};
