let Dal = require("../../../../Dal/Validate/Users/InUserGroupsJson/ForUserNamePasswordFirm")

exports.ForUserPasswordFirm = async ({ inUserName, inPassWord, inFirmName }) => {
   return await Dal.ForUserPasswordFirm({ inUserName, inPassWord, inFirmName });
};
