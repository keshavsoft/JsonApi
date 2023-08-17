let dal = require("../../../../Dal/Api/Data/PostQrCodes/Washtex")

exports.GetFunc = async ({ inClientName, inPurchasePK, inDataPk }) => {
    return await dal.GetFunc({ inClientName, inPurchasePK, inDataPk });
};