let Dal = require("../../../../Dal/Validate/Users/InUserDataJson/ForUserNameAndPassword")

exports.ForUserAndPassword =async ({inUserName,inPassWord}) =>{
   return await Dal.ForUserAndPassword({inUserName,inPassWord});
};

exports.ForUserAndPasswordReturnFirmDetails =async ({inUserName,inPassWord}) =>{
   return await Dal.ForUserAndPasswordReturnFirmDetails({inUserName,inPassWord});
}