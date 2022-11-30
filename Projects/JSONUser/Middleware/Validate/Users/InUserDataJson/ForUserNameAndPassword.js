let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/Find/UserNameAndPassword");

let ForUserAndPassword = async ({ inUserName, inPassWord }) => {
    return await DataSupply.StartFunc({ inUserName, inPassWord });
};

let ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
    return await DataSupply.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
};

module.exports = { ForUserAndPassword, ForUserAndPasswordReturnFirmDetails };

