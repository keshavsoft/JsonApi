let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk")

exports.GetFunc = async ({ inClientName, inPurchasePK, inDataPk }) => {
    return await dal.GetFunc({ inClientName, inPurchasePK, inDataPk });
};