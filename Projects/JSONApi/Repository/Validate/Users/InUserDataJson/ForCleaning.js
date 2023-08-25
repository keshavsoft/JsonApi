let Dal = require("../../../../Dal/Validate/Users/InUserDataJson/ForCleaning")

exports.TokenToCookie = async ({ inUserName, inPassWord }) => {
   return await Dal.TokenToCookie({ inUserName, inPassWord });
};
