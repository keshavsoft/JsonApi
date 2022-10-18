let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromTable/Footer/Save");

exports.SaveFunc = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey }) => {
    let LocalDataToReturn;

    LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey });

    return await LocalDataToReturn;
};
