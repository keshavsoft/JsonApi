let Dal = require("../../../../Dal/Validate/Users/InUserDataJson/ForUserNameAndPassword")


exports.ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
   return await Dal.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
}