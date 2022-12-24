let CommonFromDataSupply = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/FirmDetailsJsonFile/PullData/ForReport");

exports.GetFunc = async ({ inDataPK }) => {
    return await CommonFromDataSupply.StartFunc({ inDataPK });
};
