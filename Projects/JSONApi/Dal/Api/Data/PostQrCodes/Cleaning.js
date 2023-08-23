let CommonDataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/CustomFuncs/AutoPost");

exports.GetFunc = async ({ inClientName, inPurchasePK, inFileNameOnly, inDataPk }) => {
   let LocalDataToReturn = await CommonDataSupply.StartFunc({ inClientName, inPurchasePK, inFileNameOnly, inDataPk });

   return await LocalDataToReturn;
};