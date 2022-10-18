let CommonDataSupply = require("../../../../../DataSupply/UtilityFuncs/VerifyTokenAndSetup");

let VerifyTokenAndSetup = async ({ inUserName, inEmail, inJWToken }) => {
    return await CommonDataSupply.StartFunc({ inUserName, inEmail, inJWToken });
};

let FromTemplate = async ({ inUserName, inEmail, inJWToken }) => {
    return await CommonDataSupply.FromTemplate({ inUserName, inEmail, inJWToken });
};

module.exports = { VerifyTokenAndSetup, FromTemplate };