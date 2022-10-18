//let CommonData = require("../../../CommonData/Preview/ShowData");
let CommonDataSupply = require("../../../../../DataSupply/Reports/PrintOut/PullData/FromPk");
//let CommonDataSupply = require("../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/");

exports.ShowData = async ({ inJsonConfig, inItemConfig, inPK, inDataPK }) => {
    let LocalDataPK = inDataPK;
    let LocalReturnObject;

    if (LocalDataPK > 0) {
        LocalReturnObject = await CommonDataSupply.StartFunc({
            inJsonConfig, inItemConfig,
            inRowPK: inPK,
            inDataPK: LocalDataPK
        });
    };

    return await LocalReturnObject;
};

exports.FromDataFolder = async ({ inJsonConfig, inItemConfig, inPK, inDataPK }) => {
    let LocalDataPK = inDataPK;
    let LocalReturnObject;

    if (LocalDataPK > 0) {
        LocalReturnObject = await CommonDataSupply.FromDataFolder({
            inJsonConfig, inItemConfig,
            inRowPK: inPK,
            inDataPK: LocalDataPK
        });
    };

    return await LocalReturnObject;
};

exports.Bulk = (inJsonConfig, inItemConfig, inUserName, callback) => {
    let LocalDataToReturn;
    // = CommonData.BulkPullData({ inJsonConfig, inItemConfig, inDataToPreview, inUserName });

    callback(LocalDataToReturn, null);
};

