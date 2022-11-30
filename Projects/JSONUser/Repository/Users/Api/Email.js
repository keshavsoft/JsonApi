let dal = require("../../../Dal/Users/Api/Email");

exports.VerifyTokenAndSetup = async ({ inUserName, inEmail, inJWToken }) => {
    let LocalReturnData = await dal.VerifyTokenAndSetup({ inUserName, inEmail, inJWToken });

    return await LocalReturnData;
};

exports.FromTemplate = async ({ inUserName, inEmail, inJWToken }) => {
    let LocalReturnData = await dal.FromTemplate({ inUserName, inEmail, inJWToken });

    return await LocalReturnData;
};