let Dal = require("../../../../Dal/Validate/Users/InUserDataJson/CheckCredentials")

exports.PostFunc = ({ inUserName, inPassWord }) => {
   return Dal.PostFunc({ inUserName, inPassWord });
};

