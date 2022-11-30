//let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/Admin/Setup");
//let CommonFromTemplate = require("../../../../../DataSupply/Fs/Users/Admin/Setup/FromTemplate");

let CommonFromTemplate = require("../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/FromTemplate");

let Basic = async ({ inUserPK }) => {
    return await CommonFromTemplate.StartFunc({ inUserPK });
};

module.exports = { Basic };