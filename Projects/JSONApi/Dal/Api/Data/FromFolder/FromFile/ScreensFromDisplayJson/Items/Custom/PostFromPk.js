let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/CustomFuncs/AutoPost");

exports.GetFunc = async ({ inClientName, inPurchasePK,inDataPk }) => {
   let LocalDataToReturn = await CommonDataSupply.StartFunc({inClientName, inPurchasePK ,inDataPk});
   return await LocalDataToReturn;
};

