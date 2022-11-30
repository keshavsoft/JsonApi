let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserGroups/Find/InJson");
//let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserGroups/InsertData/NewUser");

let ForUserPasswordFirm = async ({ inUserName, inPassWord, inFirmName }) => {
    return await DataSupply.StartFunc({ inUserName, inPassWord, inFirmName });
};

module.exports = { ForUserPasswordFirm };