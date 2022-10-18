let CommonUserFuncs = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/InsertData/NewUser");
let CommonUserFunc = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/InsertData/NewUserWithPK");

let Save = async ({ inUserName, inPassword }) => {
    return await CommonUserFuncs.StartFunc({ inUserName, inPassword });
};

let WithDataPk = async ({ inDataPk, inUserName, inPassword }) => {
    return await CommonUserFunc.WithDataPk({ inDataPk, inUserName, inPassword });
};

module.exports = { Save, WithDataPk };