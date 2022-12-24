let dal = require("../../../../../Dal/Api/Data/FromFolder/FirmDetails/ForReport");

exports.GetFunc = async ({ inDataPK }) => {
    return await dal.GetFunc({ inDataPK });
};
