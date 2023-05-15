let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserGroupsJsonFile/Validate/ForUserPassword");
//let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/FirmDetailsJsonFile/PullData");

let ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
    return await DataSupply.StartFunc({ inUserName, inPassWord });
};

let TokenToCookieFirmDetailsAlso = async ({ inUserName, inPassWord }) => {
    return await DataSupply.TokenToCookieFirmDetailsAlso({ inUserName, inPassWord });
};

module.exports = {
    ForUserAndPasswordReturnFirmDetails,
    TokenToCookieFirmDetailsAlso
};