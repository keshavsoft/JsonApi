let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/CustomFuncs/AutoPost");

exports.GetFunc = async ({ inClientName, inPurchasePK }) => {
   let LocalDataToReturn = await CommonDataSupply.StartFunc({inClientName, inPurchasePK });
   return await LocalDataToReturn;
};

