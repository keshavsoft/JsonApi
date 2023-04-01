let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk")

exports.GetFunc = async ({ inClientName, inPurchasePK }) => {
    return await dal.GetFunc({ inClientName, inPurchasePK });
};