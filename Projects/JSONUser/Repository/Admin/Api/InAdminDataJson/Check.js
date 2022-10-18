let Dal = require("../../../../Dal/Admin/Api/InAdminDataJson/Check")

exports.ForUserAndPassword = async ({ inUserName, inPassWord, inoriginalUrl }) => {
    return await Dal.ForUserAndPassword({ inUserName, inPassWord, inoriginalUrl })
};