let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/LoginFolder/UserDataJsonFile/Find/CredentialsCheckAndLog");

let PostFunc = ({ inUserName, inPassWord }) => {
    return DataSupply.StartFunc({ inUserName, inPassWord });
};

module.exports = {
    PostFunc
};