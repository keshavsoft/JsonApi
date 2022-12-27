let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/Find/UserNameAndPassword");
//let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/FirmDetailsJsonFile/PullData");

let ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
    return await DataSupply.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
};

let TokenToCookieFirmDetailsAlso = async ({ inUserName, inPassWord }) => {
    return await DataSupply.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
};

module.exports = {
    ForUserAndPasswordReturnFirmDetails,
    TokenToCookieFirmDetailsAlso
};