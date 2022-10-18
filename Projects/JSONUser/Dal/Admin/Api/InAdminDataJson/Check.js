let CommonDataSupply = require("../../../../../../DataSupply/Fs/Users/AdminData/Check")

let ForUserAndPassword = async ({ inUserName, inPassWord, inoriginalUrl }) => {
    return await CommonDataSupply.ForUserAndPassword({ inUserName, inPassWord, inoriginalUrl })
};

module.exports = { ForUserAndPassword };