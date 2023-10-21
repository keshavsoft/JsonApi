let dal = require("../../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/WithFilter/TotalCount");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inFilterString }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inFilterString });
};