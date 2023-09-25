let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/MaxWithFilter");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName });
};

exports.paramsFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName,inFilterString, inCount }) => {
    return await dal.paramsFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName , inFilterString, inCount});
};