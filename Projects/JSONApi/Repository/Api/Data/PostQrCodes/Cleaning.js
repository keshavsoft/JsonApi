let dal = require("../../../../Dal/Api/Data/PostQrCodes/Cleaning")

exports.GetFunc = async ({ inClientName, inPurchasePK, inFileNameOnly, inDataPk }) => {
    return await dal.GetFunc({ inClientName, inPurchasePK, inFileNameOnly, inDataPk });
};