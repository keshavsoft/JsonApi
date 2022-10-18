//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PushData/FromTable/Footer/Save");

//let CommonDataSupplyForSubTable = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/CommonFuns/ForSubTable/SaveFuncs");
let CommonDataSupplyForSubTable = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Footer/Save");

exports.SaveFunc = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey }) => {
    let LocalDataToReturn;
    //console.log("dal----------- : ", inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey);
    LocalDataToReturn = await CommonDataSupplyForSubTable.ForSubTable({
        inDataPK, inJsonConfig, inItemConfig, inJsonPK, inPostData, inInsertKey
    });

    return await LocalDataToReturn;
};
