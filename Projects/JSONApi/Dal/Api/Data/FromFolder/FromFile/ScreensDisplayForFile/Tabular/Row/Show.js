let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromFile/Screens/Items/PullData/ForTable/Row/Show");

exports.FromParams = async ({ inDataPk, inJsonConfig, inItemConfig, inJsonPk }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inJsonConfig, inItemConfig, inPK: inJsonPk });
    return await LocalDataToReturn;
};
