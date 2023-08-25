// let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/Find/UserNameAndPassword");
//let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/FirmDetailsJsonFile/PullData");
let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Find/UserCredentialsWithFolderCheck");

let TokenToCookie = async ({ inUserName, inPassWord }) => {
    return await DataSupply.StartFunc({ inUserName, inPassWord });
};

module.exports = {
    TokenToCookie
};