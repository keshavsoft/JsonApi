let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/LastWeek");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName });
};